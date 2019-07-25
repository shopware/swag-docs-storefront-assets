<?php declare(strict_types=1);

namespace Swag\StorefrontAssets;

use Shopware\Core\Framework\Plugin;

class StorefrontAssets extends Plugin
{
    public function getStorefrontScriptPath(): string
    {
        return 'Resources/dist/storefront/js';
    }
}