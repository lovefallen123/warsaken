import pandas as pd
dict_from_csv = pd.read_csv('Warsaken.csv', header=0, index_col=0).to_dict()
print(dict_from_csv)
