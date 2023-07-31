function TopNavigationBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: '#f2f2f2',
        }}
      >
        <TextInput
          style={{
            flex: 1,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 8,
          }}
          placeholder="Search..."
        />
      </View>
    );
  }