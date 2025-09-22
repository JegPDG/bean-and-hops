// src/components/ReviewForm.js
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { reviewsAPI, menuAPI } from '../../services/api';

const ReviewForm = ({ onReviewSubmitted, selectedMenuItem }) => {
  const { isAuthenticated } = useAuth();
  const [menuItems, setMenuItems] = useState([]);
  
  const [formData, setFormData] = useState({
    rvw_item: selectedMenuItem || '',
    rvw_rate: '',
    rvw_text: '',
  });
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchMenuItems();
  }, []);

  useEffect(() => {
    if (selectedMenuItem) {
      setFormData(prev => ({ ...prev, rvw_item: selectedMenuItem }));
    }
  }, [selectedMenuItem]);

  const fetchMenuItems = async () => {
    try {
      const response = await menuAPI.getMenuItems();
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      alert('Please sign in first');
      return;
    }

    setLoading(true);
    try {
      await reviewsAPI.createReview({
        ...formData,
        rvw_rate: parseInt(formData.rvw_rate),
      });
      
      // Reset form
      setFormData({
        rvw_item: selectedMenuItem || '',
        rvw_rate: '',
        rvw_text: '',
      });
      
      setShowForm(false);
      
      if (onReviewSubmitted) {
        onReviewSubmitted();
      }
      
      alert('✅ Review submitted successfully!');
    } catch (error) {
      console.error('Error submitting review:', error);
      alert('❌ Error submitting review');
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="review-form-login">
        <p>Sign in with Google to write a review</p>
      </div>
    );
  }

  if (!showForm) {
    return (
      <button 
        onClick={() => setShowForm(true)}
        className="write-review-btn"
      >
        ✍️ Write a Review
      </button>
    );
  }

  return (
    <div className="review-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Menu Item:</label>
          <select
            name="rvw_item"
            value={formData.rvw_item}
            onChange={handleChange}
            required
          >
            <option value="">Select a menu item...</option>
            {menuItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Rating:</label>
          <select
            name="rvw_rate"
            value={formData.rvw_rate}
            onChange={handleChange}
            required
          >
            <option value="">Select rating...</option>
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Very Good</option>
            <option value="3">⭐⭐⭐ Good</option>
            <option value="2">⭐⭐ Fair</option>
            <option value="1">⭐ Poor</option>
          </select>
        </div>

        <div className="form-group">
          <label>Your Review:</label>
          <textarea
            name="rvw_text"
            value={formData.rvw_text}
            onChange={handleChange}
            placeholder="Share your experience..."
            rows="4"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" disabled={loading}>
            {loading ? '📝 Submitting...' : '📝 Submit Review'}
          </button>
          <button 
            type="button" 
            onClick={() => setShowForm(false)}
            className="cancel-btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;