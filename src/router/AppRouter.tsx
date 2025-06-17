import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Welcomelayout from '../layouts/Welcomelayout';
import MainLayout from '../layouts/MainLayout';
import Blanklayout from '../layouts/Blanklayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import State from '../pages/State';
import ActiveState from '../pages/ActiveState';
import About from '../pages/About';
import Products from '../pages/Products';
import UIConfirm from '../pages/UI_Confirm';
import ProductDetail from '../pages/ProductDetail';
import NotFound from '../pages/NotFound';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main Layout Routes */}
        <Route path="/" element={
          <Welcomelayout>
            <Home />
          </Welcomelayout>
        } />
        <Route path="/login" element={
          <Welcomelayout>
            <Login />
          </Welcomelayout>
        } />
        <Route path="/state" element={
          <MainLayout>
            <State />
          </MainLayout>
        } />
        <Route path="/state-active" element={
          <MainLayout>
            <ActiveState />
          </MainLayout>
        } />
        
        <Route path="/about" element={
          <MainLayout>
            <About />
          </MainLayout>
        } />
        <Route path="/products" element={
          <MainLayout>
            <Products />
          </MainLayout>
        } />
        <Route path="/products/:id" element={
          <MainLayout>
            <ProductDetail />
          </MainLayout>
        } />
        <Route path="/ui-confirm-mainlayout" element={
          <MainLayout>
            <UIConfirm />
          </MainLayout>
        } />
        <Route path="/ui-confirm-blanklayout" element={
          <Blanklayout>
            <UIConfirm />
          </Blanklayout>
        } />

        {/* 404 Route */}
        <Route path="/404" element={
          <MainLayout>
            <NotFound />
          </MainLayout>
        } />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter; 