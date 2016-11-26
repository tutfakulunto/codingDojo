# Part 1
x = [4, 6, 1, 3, 5, 7, 25]
def draw_stars(num_list):
    for num in num_list:
        stars = ''
        for i in range(num):
            stars += '*'
        print(stars)

draw_stars1(x)

# Part 2
y = [4,'Tom',1,'Michael',5,7,'Jimmy Smith']
def draw_stars2(name_list):
    for item in name_list:
        output = ''
        if type(item) is int:
            for i in range(item):
                output += '*'
        elif type(item) is str:
            first_letter = item[0].lower()
            for i in range(len(item)):
                output += first_letter
        print output

draw_stars2(y)