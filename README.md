# Start MongoDB as Docker Container JavaScript Action
Starts the specific version of MongoDB as a detach Docker container


## Inputs

### `mongoDbVersion`

**Required** The version of mongoDB. Default `"3.4"`.


## Example usage
...
...
strategy:
      matrix:
        mongodb-version: ["4.0", "4.2"]
...
...
- name: Launch MongoDB
  uses: wbari/mongoDB@v0.1
  with:
    mongoDBVersion: ${{ matrix.mongodb-version }}


branding:
  icon: 'activity'  
  color: 'white'
