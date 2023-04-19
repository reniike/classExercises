package classExercises;

import java.util.Arrays;
import java.util.Scanner;

public class ConvertDate {
//    public static String ConvertDate(String date){
//
//    }
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        System.out.println("Enter a date:: ");
        String date = input.nextLine();
        String[] splittedDate = date.split("/");
        System.out.println(Arrays.toString(splittedDate));
//        LocalDate localDate;
    }
}
