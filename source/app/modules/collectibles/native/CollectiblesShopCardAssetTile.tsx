// app/modules/collectibles/native/CollectiblesShopCardAssetTile.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    romeo = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = romeo;
    var _closure1_slot2 = report;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = romeo.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = report[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 3;
    options = report[tango];
    options = oscar.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot5 = options;
    options = report[tango];
    options = oscar.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot6 = options;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = report[tango];
    verify = oscar.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    tango['assetContainer'] = offset;
    offset = {};
    yankee = 5;
    foxtrot = report[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.sm;
    offset['borderBottomLeftRadius'] = foxtrot;
    foxtrot = report[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.sm;
    offset['borderBottomRightRadius'] = foxtrot;
    tango['profileEffectAssetContainer'] = offset;
    offset = {'borderRadius': null, 'height': 100, 'width': 100};
    foxtrot = report[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.radii;
    foxtrot = foxtrot.sm;
    offset['borderRadius'] = foxtrot;
    tango['condensedAssetContainer'] = offset;
    offset = {};
    foxtrot = report[yankee];
    foxtrot = romeo.bind(entity)(foxtrot);
    foxtrot = foxtrot.unsafe_rawColors;
    foxtrot = foxtrot.BLACK_460;
    offset['backgroundColor'] = foxtrot;
    tango['assetContainerDarkBackground'] = offset;
    offset = {};
    yankee = report[yankee];
    yankee = romeo.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_TERTIARY;
    offset['backgroundColor'] = yankee;
    tango['assetContainerLightBackground'] = offset;
    offset = {'position': 'absolute', 'height': 100, 'width': 100};
    tango['avatarPlaceholder'] = offset;
    offset = {'position': 'absolute', 'height': 62, 'width': 62};
    tango['condensedAvatarPlaceholder'] = offset;
    offset = {'position': 'absolute', 'opacity': 1};
    tango['checkmark'] = offset;
    offset = {'position': 'absolute', 'top': 0, 'zIndex': 2, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    tango['overlayContainer'] = offset;
    offset = {'width': 150, 'height': 140};
    tango['overlaySize'] = offset;
    offset = {'width': 100, 'height': 100};
    tango['condensedOverlaySize'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot8 = tango;
    tango = function(argFoo) { // Original name: PurchasedAssetOverlay
        _fun99595: for(var _fun99595_ip = 0; ; ) switch(_fun99595_ip) {
 0:
            entity = argFoo;
            golf = entity.condensed;
            offset = entity.isDarkTheme;
            entity = _closure1_slot8;
            tango = undefined;
            options = entity.bind(tango)();
            zulu = _closure1_slot5;
            mike = _closure1_slot4;
            entity = {};
            verify = options.overlayContainer;
            oscar = new Array(2);
            oscar[0] = verify;
            if(golf) { _fun99595_ip = 63; continue _fun99595 }
 55:
            golf = options.overlaySize;
            _fun99595_ip = 69; continue _fun99595;
 63:
            golf = options.condensedOverlaySize;
 69:
            oscar[1] = golf;
            entity['style'] = oscar;
            golf = _closure1_slot5;
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            report = 6;
            report = verify[report];
            report = oscar.bind(tango)(report);
            oscar = report.CheckmarkLargeIcon;
            report = {};
            verify = 'lg';
            report['size'] = verify;
            verify = 'black';
            if(!offset) { _fun99595_ip = 128; continue _fun99595 }
 124:
            verify = 'white';
 128:
            report['color'] = verify;
            options = options.checkmark;
            report['style'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot9 = tango;
    tango = function(argFoo) { // Original name: Asset
        _fun99596: for(var _fun99596_ip = 0; ; ) switch(_fun99596_ip) {
 0:
            entity = argFoo;
            mike = entity.product;
            oscar = entity.condensed;
            report = entity.isDarkTheme;
            verify = entity.isPurchased;
            yankee = _closure1_slot0;
            zulu = _closure1_slot2;
            tango = 7;
            golf = zulu[tango];
            tango = undefined;
            options = yankee.bind(tango)(golf);
            golf = options.useShopProductItems;
            options = golf.bind(options)(mike);
            golf = options.firstProfileEffect;
            options = options.firstAvatarDecoration;
            offset = mike.type;
            romeo = 8;
            zulu = zulu[romeo];
            zulu = yankee.bind(tango)(zulu);
            zulu = zulu.CollectiblesItemType;
            zulu = zulu.BUNDLE;
            if(!(offset === zulu)) { _fun99596_ip = 121; continue _fun99596 }
 108:
            zulu = null;
            if(!(zulu != options)) { _fun99596_ip = 121; continue _fun99596 }
 114:
            if(!(zulu == golf)) { _fun99596_ip = 330; continue _fun99596 }
 121:
            offset = _closure1_slot3;
            zulu = mike.items;
            mike = 1;
            zulu = offset.bind(tango)(zulu, mike);
            mike = 0;
            yankee = zulu[mike];
            zulu = yankee.type;
            offset = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[romeo];
            mike = offset.bind(tango)(mike);
            mike = mike.CollectiblesItemType;
            mike = mike.AVATAR_DECORATION;
            if(!(mike !== zulu)) { _fun99596_ip = 274; continue _fun99596 }
 184:
            offset = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[romeo];
            mike = offset.bind(tango)(mike);
            mike = mike.CollectiblesItemType;
            mike = mike.PROFILE_EFFECT;
            if(!(mike !== zulu)) { _fun99596_ip = 221; continue _fun99596 }
 217:
            mike = null;
            return mike;
 221:
            offset = _closure1_slot5;
            zulu = _closure1_slot1;
            romeo = _closure1_slot2;
            mike = 11;
            mike = romeo[mike];
            zulu = zulu.bind(tango)(mike);
            mike = {};
            mike['item'] = yankee;
            mike['isPurchased'] = verify;
            mike['condensed'] = oscar;
            mike['isDarkTheme'] = report;
            mike = offset.bind(tango)(zulu, mike);
            return mike;
 274:
            offset = _closure1_slot5;
            zulu = _closure1_slot1;
            romeo = _closure1_slot2;
            mike = 10;
            mike = romeo[mike];
            zulu = zulu.bind(tango)(mike);
            mike = {};
            mike['isPurchased'] = verify;
            mike['item'] = yankee;
            yankee = 120;
            if(!oscar) { _fun99596_ip = 318; continue _fun99596 }
 315:
            yankee = 75;
 318:
            mike['size'] = yankee;
            mike = offset.bind(tango)(zulu, mike);
            return mike;
 330:
            zulu = _closure1_slot5;
            mike = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 9;
            entity = offset[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['isPurchased'] = verify;
            entity['deco'] = options;
            entity['pfx'] = golf;
            entity['condensed'] = oscar;
            entity['isDarkTheme'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    tango = function(argFoo) { // Original name: CondensedAssetTile
        _fun99597: for(var _fun99597_ip = 0; ; ) switch(_fun99597_ip) {
 0:
            entity = argFoo;
            golf = entity.isDarkTheme;
            report = entity.children;
            mike = _closure1_slot8;
            tango = undefined;
            options = mike.bind(tango)();
            zulu = _closure1_slot5;
            mike = _closure1_slot4;
            entity = {};
            verify = options.assetContainer;
            oscar = new Array(3);
            oscar[0] = verify;
            verify = options.condensedAssetContainer;
            oscar[1] = verify;
            if(golf) { _fun99597_ip = 72; continue _fun99597 }
 64:
            golf = options.assetContainerLightBackground;
            _fun99597_ip = 78; continue _fun99597;
 72:
            golf = options.assetContainerDarkBackground;
 78:
            oscar[2] = golf;
            entity['style'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot11 = tango;
    tango = function(argFoo) { // Original name: RegularAssetTile
        _fun99598: for(var _fun99598_ip = 0; ; ) switch(_fun99598_ip) {
 0:
            mike = argFoo;
            entity = mike.product;
            golf = mike.isDarkTheme;
            report = mike.children;
            mike = _closure1_slot8;
            tango = undefined;
            yankee = mike.bind(tango)();
            zulu = _closure1_slot3;
            mike = entity.items;
            entity = 1;
            mike = zulu.bind(tango)(mike, entity);
            entity = 0;
            verify = mike[entity];
            zulu = _closure1_slot5;
            mike = _closure1_slot4;
            entity = {};
            offset = yankee.assetContainer;
            oscar = new Array(4);
            oscar[0] = offset;
            if(golf) { _fun99598_ip = 93; continue _fun99598 }
 85:
            golf = yankee.assetContainerLightBackground;
            _fun99598_ip = 99; continue _fun99598;
 93:
            golf = yankee.assetContainerDarkBackground;
 99:
            oscar[1] = golf;
            romeo = verify.type;
            foxtrot = _closure1_slot0;
            golf = _closure1_slot2;
            offset = 8;
            golf = golf[offset];
            golf = foxtrot.bind(tango)(golf);
            golf = golf.CollectiblesItemType;
            golf = golf.PROFILE_EFFECT;
            golf = romeo === golf;
            if(!golf) { _fun99598_ip = 153; continue _fun99598 }
 147:
            golf = yankee.profileEffectAssetContainer;
 153:
            oscar[2] = golf;
            golf = {};
            yankee = verify.type;
            verify = _closure1_slot0;
            options = _closure1_slot2;
            options = options[offset];
            options = verify.bind(tango)(options);
            options = options.CollectiblesItemType;
            offset = options.AVATAR_DECORATION;
            options = '100%';
            verify = options;
            if(!(yankee === offset)) { _fun99598_ip = 209; continue _fun99598 }
 206:
            verify = 140;
 209:
            golf['height'] = verify;
            golf['width'] = options;
            oscar[3] = golf;
            entity['style'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot12 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        _fun99599: for(var _fun99599_ip = 0; ; ) switch(_fun99599_ip) {
 0:
            mike = argFoo;
            backup = mike.product;
            foxtrot = mike.isDarkTheme;
            entity = mike.condensed;
            mike = mike.isPurchased;
            if(entity) { _fun99599_ip = 159; continue _fun99599 }
 36:
            report = _closure1_slot6;
            tango = _closure1_slot12;
            zulu = {};
            zulu['product'] = backup;
            zulu['isDarkTheme'] = foxtrot;
            entity = mike;
            if(!mike) { _fun99599_ip = 92; continue _fun99599 }
 62:
            verify = _closure1_slot5;
            options = _closure1_slot9;
            golf = {};
            golf['isDarkTheme'] = foxtrot;
            oscar = false;
            golf['condensed'] = oscar;
            oscar = undefined;
            entity = verify.bind(oscar)(options, golf);
 92:
            oscar = new Array(2);
            oscar[0] = entity;
            verify = _closure1_slot5;
            options = _closure1_slot10;
            golf = {};
            golf['product'] = backup;
            golf['isDarkTheme'] = foxtrot;
            entity = false;
            golf['condensed'] = entity;
            golf['isPurchased'] = mike;
            entity = undefined;
            golf = verify.bind(entity)(options, golf);
            oscar[1] = golf;
            zulu['children'] = oscar;
            entity = report.bind(entity)(tango, zulu);
            _fun99599_ip = 297; continue _fun99599;
 159:
            report = _closure1_slot5;
            tango = _closure1_slot7;
            zulu = {};
            options = _closure1_slot6;
            golf = _closure1_slot11;
            oscar = {};
            oscar['product'] = backup;
            oscar['isDarkTheme'] = foxtrot;
            yankee = mike;
            if(!yankee) { _fun99599_ip = 225; continue _fun99599 }
 195:
            sizing = _closure1_slot5;
            kilo = _closure1_slot9;
            romeo = {};
            romeo['isDarkTheme'] = foxtrot;
            verify = true;
            romeo['condensed'] = verify;
            verify = undefined;
            yankee = sizing.bind(verify)(kilo, romeo);
 225:
            verify = new Array(2);
            verify[0] = yankee;
            romeo = _closure1_slot5;
            yankee = _closure1_slot10;
            offset = {};
            offset['product'] = backup;
            offset['isDarkTheme'] = foxtrot;
            foxtrot = true;
            offset['condensed'] = foxtrot;
            offset['isPurchased'] = mike;
            mike = undefined;
            offset = romeo.bind(mike)(yankee, offset);
            verify[1] = offset;
            oscar['children'] = verify;
            oscar = options.bind(mike)(golf, oscar);
            zulu['children'] = oscar;
            entity = report.bind(mike)(tango, zulu);
 297:
            return entity;
        }
    };
    tango = tango.bind(golf)(mike);
    mike = 12;
    report = report[mike];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/collectibles/native/CollectiblesShopCardAssetTile.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    tango = 200;
    zulu['COLLECTIBLES_SHOP_CARD_SIZE'] = tango;
    zulu['COLLECTIBLES_SHOP_CARD_VERTICAL_MARGIN'] = mike;
    return entity;
})();