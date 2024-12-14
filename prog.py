def main():
    url1 = "https://www.linkedin.com/checkpoint/lg/sign-in-another-account?midToken=AQHsdMHMoQXuqA"
    url2 = "https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"
    url3 = "https://www.instagram.com/"

    while True:
        print("\nMenu:")
        print("1. LinkedIn")
        print("2. GitHub")
        print("3. Instagram")
        
        choice = input("Enter your choice (1-3): ")

        if choice == '1':
            print(f"\nLinkedIn URL: {url1}")
        elif choice == '2':
            print(f"\nGitHub URL: {url2}")
        elif choice == '3':
            print(f"\nInstagram URL: {url3}")
            break
        else:
            print("\nInvalid choice.")

if __name__ == "__main__":
    main()
