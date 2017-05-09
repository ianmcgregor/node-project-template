function tearDown() {
    return true;
}

describe('tests', () => {

    beforeEach(() => {
        return tearDown();
    });

    afterEach(() => {
        return tearDown();
    });

    describe('GET /', () => {
        it('should load index page', done => {
            testHelpers.request()
                .get('/')
                .end((err, res) => {
                    expect(err).to.not.exist;
                    expect(res.redirects.length).to.eql(0);
                    expect(res.status).to.eql(200);
                    expect(res.type).to.eql('text/html');
                    done();
                });
        });
    });

    describe('GET 404', () => {
        it('should load 404 page', done => {
            testHelpers.request()
                .get('/ishouldnotexist')
                .end((err, res) => {
                    expect(err).to.exist;
                    expect(err.message).to.eql('Not Found');
                    expect(res.redirects.length).to.eql(0);
                    expect(res.status).to.eql(404);
                    expect(res.type).to.eql('text/html');
                    done();
                });
        });
    });
});
