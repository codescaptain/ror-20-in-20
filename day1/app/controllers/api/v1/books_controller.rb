module Api
  module V1
    class BooksController < ApplicationController
      before_action :set_book, only: %i[update destroy show]
      def index
        @books = Book.all
        render json: BooksRepresenter.new(@books).as_json
      end

      def show
        render json: BookRepresenter.new(@book).as_json
      end

      def create
        @book = Book.create(book_params)
        if @book.save
          render json: BookRepresenter.new(@book).as_json, status: :created
        else
          render json: @book.errors, status: :unprocessable_entity
        end
      end

      # PUT /books/:id
      def update
        @book.update(book_params)
        head :no_content
      end

      # DELETE /books/:id
      def destroy
        @book.destroy
        head :no_content
      end

      private

      def set_book
        @book = Book.find(params[:id])
      end

      def book_params
        params.permit(:author, :title, :category_id)
      end
    end
  end
end
