def calculate_grade_point(marks):
    """Convert marks to grade point based on the grading scale."""
    if 90 <= marks <= 100:
        return 10
    elif 80 <= marks <= 89:
        return 9
    elif 70 <= marks <= 79:
        return 8
    elif 60 <= marks <= 69:
        return 7
    elif 50 <= marks <= 59:
        return 6
    else:
        return 0  # Failure

def main():
    print("Welcome to the CGPA Calculator!")
    try:
        num_subjects = int(input("Enter the number of subjects: "))
        if num_subjects <= 0:
            print("Number of subjects must be greater than zero.")
            return
        
        total_weighted_grade_points = 0
        total_credits = 0
        
        for i in range(num_subjects):
            print(f"\nSubject {i+1}:")
            subject_name = input("Enter the subject name: ")
            marks = int(input(f"Enter marks obtained in {subject_name} (0-100): "))
            if marks < 0 or marks > 100:
                print("Marks must be between 0 and 100. Please restart the program.")
                return
            credits = int(input(f"Enter the number of credits for {subject_name}: "))
            if credits <= 0:
                print("Credits must be greater than zero. Please restart the program.")
                return
            
            grade_point = calculate_grade_point(marks)
            print(f"Grade point for {subject_name}: {grade_point}")
            
            total_weighted_grade_points += grade_point * credits
            total_credits += credits
        
        if total_credits == 0:
            print("Total credits cannot be zero. Please restart the program.")
            return
        
        cgpa = total_weighted_grade_points / total_credits
        print(f"\nFinal CGPA: {cgpa:.2f}")
    
    except ValueError:
        print("Invalid input! Please enter numerical values where required.")

if __name__ == "__main__":
    main()
