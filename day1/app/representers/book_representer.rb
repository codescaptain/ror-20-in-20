class BookRepresenter
  def initialize(book)
    @book = book
  end

  def as_json
    {
      id: book.id,
      title: book.title,
      category: Category.find(book.id).name,
      data_added: book.created_at
    }
  end

  private

  attr_reader :book
end
