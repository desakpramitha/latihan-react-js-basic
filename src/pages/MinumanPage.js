import React, { useState } from 'react';
import recipes from '../data/recipes';

const MinumanPage = () => {
  const minumanRecipes = recipes.filter((recipe) => recipe.kategori === 'Minuman');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (recipe) => {
    setSelectedRecipe(recipe);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
    setShowModal(false);
  };

  return (
    <div className="recipes-container">
      {minumanRecipes.map((recipe) => (
        <div className="recipe-card" key={recipe.id} onClick={() => handleShowModal(recipe)}>
          <img src={recipe.gambar} alt={recipe.nama} className="recipe-image" />
          <p className="recipe-category">{recipe.kategori}</p>
          <h2 className="recipe-title">{recipe.nama}</h2>
        </div>
      ))}
      {showModal && (
        <div className="modal show">
          <div className="modal-header">
            <h3 className="modal-title">{selectedRecipe?.nama}</h3>
            <button className="modal-close" onClick={handleCloseModal}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            {selectedRecipe?.gambar && (
              <img src={selectedRecipe.gambar} alt={selectedRecipe.nama} className="modal-image" />
            )}
            <h4>Bahan:</h4>
            <ul>
              {selectedRecipe?.bahan.map((bahan, index) => (
                <li key={index}>{bahan.nama_bahan} - {bahan.total}</li>
              ))}
            </ul>
            <h4>Peralatan:</h4>
            <ul>
              {selectedRecipe?.peralatan.map((peralatan, index) => (
                <li key={index}>{peralatan}</li>
              ))}
            </ul>
            <h4>Langkah:</h4>
            <ol>
              {selectedRecipe?.langkah.map((langkah, index) => (
                <li key={index}>{langkah}</li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default MinumanPage;