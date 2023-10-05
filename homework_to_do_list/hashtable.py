class HashTable:
    def __init__(self, table_size=10):
        self.table_size = table_size
        self.storage = [[] for _ in range(table_size)]

    def hash_function(self, key):
        return hash(key) % self.table_size

    def insert(self, key, value):
        index = self.hash_function(key)
        self.storage[index].append((key, value))

    def search(self, key):
        index = self.hash_function(key)
        for k, v in self.storage[index]:
            if k == key:
                return v
        return None

    def remove(self, key):
        index = self.hash_function(key)
        for item in self.storage[index]:
            if item[0] == key:
                self.storage[index].remove(item)
                return