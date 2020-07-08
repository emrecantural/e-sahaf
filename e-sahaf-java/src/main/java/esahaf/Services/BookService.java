package esahaf.Services;

import esahaf.Model.Book;
import esahaf.Repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {

    private final BookRepository bookRepository;

    public Book addBook(final Book book) {


        return bookRepository.save(book);
    }

    public List<Book> getList(){

        return bookRepository.findAll();
    }
}
