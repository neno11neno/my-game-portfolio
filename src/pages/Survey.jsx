import 'nes.css/css/nes.min.css';
import styled from 'styled-components';
import { useState } from 'react';

const PageWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  min-height: calc(100vh - 160px);
  font-family: 'Press Start 2P', cursive;
`;

const FormWrap = styled.form`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Field = styled.div`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const SubmitBtn = styled.button`
  margin-top: 2rem;
`;

export default function Survey() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowPopup(true);
    }, 1500);
  };

  return (
    <PageWrap>
      <div>
        <h2 className="nes-text is-primary">📝 Gamer Survey</h2>

        <FormWrap className="nes-container with-title is-rounded" onSubmit={handleSubmit}>
          <p className="title">Basic Info</p>

          <Field>
            <Label htmlFor="name">Name:</Label>
            <input type="text" id="name" className="nes-input" placeholder="Your name" required />
          </Field>

          <Field>
            <Label htmlFor="phone">Phone:</Label>
            <input type="tel" id="phone" className="nes-input" placeholder="09xx-xxx-xxx" required />
          </Field>

          <Field>
            <Label htmlFor="address">Address:</Label>
            <input type="text" id="address" className="nes-input" placeholder="Taiwan, Taoyuan..." required />
          </Field>

          <p className="title">Gaming Preferences</p>

          <Field>
            <Label>Your favorite game genre?</Label>
            <label>
              <input type="radio" className="nes-radio" name="genre" value="Adventure" required />
              <span> Adventure</span>
            </label>
            <br />
            <label>
              <input type="radio" className="nes-radio" name="genre" value="Shooter" />
              <span> Shooter</span>
            </label>
            <br />
            <label>
              <input type="radio" className="nes-radio" name="genre" value="Puzzle" />
              <span> Puzzle</span>
            </label>
          </Field>

          <Field>
            <Label htmlFor="console">Most nostalgic console?</Label>
            <div className="nes-select">
              <select required id="console">
                <option value="">Select one...</option>
                <option value="fc">FC (Famicom)</option>
                <option value="sfc">SFC (Super Famicom)</option>
                <option value="gba">GBA</option>
                <option value="ps1">PS1</option>
              </select>
            </div>
          </Field>

          <SubmitBtn type="submit" className={`nes-btn is-success ${loading ? 'is-disabled' : ''}`}>
            {loading ? 'Submitting...' : 'Submit'}
          </SubmitBtn>
        </FormWrap>

        {showPopup && (
          <dialog className="nes-dialog is-rounded" open>
            <form method="dialog">
              <p className="title">Success</p>
              <p>Your response has been recorded 🎮</p>
              <menu className="dialog-menu">
                <button className="nes-btn is-primary" onClick={() => setShowPopup(false)}>
                  OK
                </button>
              </menu>
            </form>
          </dialog>
        )}
      </div>
    </PageWrap>
  );
}
