def scoresAndGrades():
    count = 0
    while count < 10:
        score = int(input("What's your score? "))
        count += 1
        if score >= 90:
            print("Score: " + str(score)  + "; Your grade is A")
        elif (score >= 80 and score  <= 89):
            print("Score: " + str(score)  + "; Your grade is B")
        elif (score >= 70 and score  <= 79):
            print("Score: " + str(score)  + "; Your grade is C")
        elif (score >= 60 and score  <= 69):
            print("Score: " + str(score)  + "; Your grade is D")
        else:
            print("Score: " + str(score) + "; Your grade is F")
    if count == 10:
        print("End of the program. Bye!")