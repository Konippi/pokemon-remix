#!/bin/bash -eu

# Install volta
if ! command -v volta &>/dev/null; then
  echo "Installing Volta..."
  brew install volta
else
  echo "Volta is already installed."
fi

# Setup Volta
echo "Setting up Volta..."
volta setup

# Add volta configuration to bash_profile
BASH_PROFILE="$HOME/.bash_profile"
VOLTA_CONFIG="
# to use \`pnpm\` on Volta
export VOLTA_FEATURE_PNPM=1
"

if ! grep -q "VOLTA_FEATURE_PNPM" "$BASH_PROFILE"; then
  echo "Adding Volta configuration to $BASH_PROFILE"
  echo "$VOLTA_CONFIG" >>"$BASH_PROFILE"
  # shellcheck source=/dev/null
  . "$BASH_PROFILE"
else
  echo "Volta configuration already exists in $BASH_PROFILE"
fi

echo "Volta setup complete."
