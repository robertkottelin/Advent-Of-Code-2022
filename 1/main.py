with open('input.txt') as f:
    all_packs = f.read().split('\n')+

separators, packsums, start_span = [i for i in range(len(all_packs)) if all_packs[i] == ''], [], 0

for end_span in separators: 
    packsums.append(sum([int(cal) for cal in all_packs[start_span:end_span]])) 
    start_span = end_span +1

# Part 01
print("The largest calorie package is worth " + str(sorted(packsums)[-1]) + " calories")

# part 02
print("The largest three calorie packages combined are worth " + str(sum(sorted(packsums)[-3:])) + " calories")