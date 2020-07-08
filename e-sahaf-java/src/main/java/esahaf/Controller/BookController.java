package esahaf.Controller;

import esahaf.Model.Book;
import esahaf.Services.BookService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class BookController {

    private final BookService bookService;

    public BookController(final BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping("/books")
    public Book addBook(@RequestBody final Book book) {
        return bookService.addBook(book);
    }

    @GetMapping("/books")
    public List<Book> getList(){
        return bookService.getList();
    }


}
