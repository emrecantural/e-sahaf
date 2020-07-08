package esahaf.Repository;

import esahaf.Model.Book;
import org.springframework.data.jpa.repository.JpaRepository;



public interface BookRepository extends JpaRepository <Book,Long> {
}
