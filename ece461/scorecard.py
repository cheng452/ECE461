import pip._vendor.requests as requests

API_URL = 'https://api.github.com/cloudinary/cloudinary_npm'

def get_scorecard(user_id):
    response = requests.get(f'{API_URL}/{user_id}')
    if response.status_code == 200:
        return response.json()
    else:
        raise Exception(f'Failed to retrieve scorecard for user {user_id}. Response: {response.content}')

def update_scorecard(user_id, data):
    response = requests.patch(f'{API_URL}/{user_id}', json=data)
    if response.status_code == 200:
        print(f'Successfully updated scorecard for user {user_id}')
    else:
        raise Exception(f'Failed to update scorecard for user {user_id}. Response: {response.content}')

get_scorecard('')