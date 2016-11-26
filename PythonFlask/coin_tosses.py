def coin_tosses():
    import random
    # the random function will return a floating point number,
    # that is 0.0 <= random_num < 1.0
    heads = 0
    tails = 0
    for i in range(1, 5001):
        random_num = round(random.random())
        if random_num == 0:
            tails += 1
            print("Attempt #" + str(i) + ": Throwing a coin... It's a tail! ... Got " + str(heads) + "head(s) so far and " + str(tails) + "tail(s) so far")
        else:
            heads += 1
            print("Attempt #" + str(i) + ": Throwing a coin... It's a head! ... Got " + str(heads) + "head(s) so far and " + str(tails) + "tail(s) so far")
    print("Ending the program, thank you!")
