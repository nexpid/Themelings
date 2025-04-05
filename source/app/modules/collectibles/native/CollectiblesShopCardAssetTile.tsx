// app/modules/collectibles/native/CollectiblesShopCardAssetTile.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = report;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = report[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot5 = option;
    tangon = tangon.jsxs;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = report[tangon];
    verify = oscard.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    tangon['assetContainer'] = offset;
    offset = {};
    yankee = 5;
    foxtra = report[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    offset['borderBottomLeftRadius'] = foxtra;
    foxtra = report[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    offset['borderBottomRightRadius'] = foxtra;
    tangon['profileEffectAssetContainer'] = offset;
    offset = {'borderRadius': null, 'height': 100, 'width': 100};
    foxtra = report[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    offset['borderRadius'] = foxtra;
    tangon['condensedAssetContainer'] = offset;
    offset = {};
    foxtra = report[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.unsafe_rawColors;
    foxtra = foxtra.BLACK_460;
    offset['backgroundColor'] = foxtra;
    tangon['assetContainerDarkBackground'] = offset;
    offset = {};
    yankee = report[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.BACKGROUND_TERTIARY;
    offset['backgroundColor'] = yankee;
    tangon['assetContainerLightBackground'] = offset;
    offset = {'position': 'absolute', 'height': 100, 'width': 100};
    tangon['avatarPlaceholder'] = offset;
    offset = {'position': 'absolute', 'height': 62, 'width': 62};
    tangon['condensedAvatarPlaceholder'] = offset;
    offset = {'position': 'absolute', 'opacity': 1};
    tangon['checkmark'] = offset;
    offset = {'position': 'absolute', 'top': 0, 'zIndex': 2, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center'};
    tangon['overlayContainer'] = offset;
    offset = {'width': 150, 'height': 140};
    tangon['overlaySize'] = offset;
    offset = {'width': 100, 'height': 100};
    tangon['condensedOverlaySize'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot7 = tangon;
    tangon = function(argFoo) { // Original name: PurchasedAssetOverlay
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = entity.condensed;
            offset = entity.isDarkTheme;
            entity = _closure1_slot7;
            tangon = undefined;
            option = entity.bind(tangon)();
            zuuluu = _closure1_slot5;
            michal = _closure1_slot4;
            entity = {};
            verify = option.overlayContainer;
            oscard = new Array(2);
            oscard[0] = verify;
            if(golfie) { _fun00002_ip = 63; continue _fun00001 }
 55:
            golfie = option.overlaySize;
            _fun00002_ip = 69; continue _fun00001;
 63:
            golfie = option.condensedOverlaySize;
 69:
            oscard[1] = golfie;
            entity['style'] = oscard;
            golfie = _closure1_slot5;
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            report = 6;
            report = verify[report];
            report = oscard.bind(tangon)(report);
            oscard = report.CheckmarkLargeIcon;
            report = {};
            verify = 'lg';
            report['size'] = verify;
            verify = 'black';
            if(!offset) { _fun00002_ip = 128; continue _fun00001 }
 124:
            verify = 'white';
 128:
            report['color'] = verify;
            option = option.checkmark;
            report['style'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    tangon = function(argFoo) { // Original name: Asset
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = entity.product;
            oscard = entity.condensed;
            report = entity.isDarkTheme;
            verify = entity.isPurchased;
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot2;
            tangon = 7;
            golfie = zuuluu[tangon];
            tangon = undefined;
            option = yankee.bind(tangon)(golfie);
            golfie = option.useShopProductItems;
            option = golfie.bind(option)(michal);
            golfie = option.firstProfileEffect;
            option = option.firstAvatarDecoration;
            offset = michal.type;
            romeon = 8;
            zuuluu = zuuluu[romeon];
            zuuluu = yankee.bind(tangon)(zuuluu);
            zuuluu = zuuluu.CollectiblesItemType;
            zuuluu = zuuluu.BUNDLE;
            if(!(offset === zuuluu)) { _fun00004_ip = 121; continue _fun00003 }
 108:
            zuuluu = null;
            if(!(zuuluu != option)) { _fun00004_ip = 121; continue _fun00003 }
 114:
            if(!(zuuluu == golfie)) { _fun00004_ip = 330; continue _fun00003 }
 121:
            offset = _closure1_slot3;
            zuuluu = michal.items;
            michal = 1;
            zuuluu = offset.bind(tangon)(zuuluu, michal);
            michal = 0;
            yankee = zuuluu[michal];
            zuuluu = yankee.type;
            offset = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[romeon];
            michal = offset.bind(tangon)(michal);
            michal = michal.CollectiblesItemType;
            michal = michal.AVATAR_DECORATION;
            if(!(michal !== zuuluu)) { _fun00004_ip = 274; continue _fun00003 }
 184:
            offset = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[romeon];
            michal = offset.bind(tangon)(michal);
            michal = michal.CollectiblesItemType;
            michal = michal.PROFILE_EFFECT;
            if(!(michal !== zuuluu)) { _fun00004_ip = 221; continue _fun00003 }
 217:
            michal = null;
            return michal;
 221:
            offset = _closure1_slot5;
            zuuluu = _closure1_slot1;
            romeon = _closure1_slot2;
            michal = 11;
            michal = romeon[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            michal['item'] = yankee;
            michal['isPurchased'] = verify;
            michal['condensed'] = oscard;
            michal['isDarkTheme'] = report;
            michal = offset.bind(tangon)(zuuluu, michal);
            return michal;
 274:
            offset = _closure1_slot5;
            zuuluu = _closure1_slot1;
            romeon = _closure1_slot2;
            michal = 10;
            michal = romeon[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            michal['isPurchased'] = verify;
            michal['item'] = yankee;
            yankee = 120;
            if(!oscard) { _fun00004_ip = 318; continue _fun00003 }
 315:
            yankee = 75;
 318:
            michal['size'] = yankee;
            michal = offset.bind(tangon)(zuuluu, michal);
            return michal;
 330:
            zuuluu = _closure1_slot5;
            michal = _closure1_slot1;
            offset = _closure1_slot2;
            entity = 9;
            entity = offset[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['isPurchased'] = verify;
            entity['deco'] = option;
            entity['pfx'] = golfie;
            entity['condensed'] = oscard;
            entity['isDarkTheme'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    tangon = function(argFoo) { // Original name: CondensedAssetTile
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            golfie = entity.isDarkTheme;
            report = entity.children;
            michal = _closure1_slot7;
            tangon = undefined;
            option = michal.bind(tangon)();
            zuuluu = _closure1_slot5;
            michal = _closure1_slot4;
            entity = {};
            verify = option.assetContainer;
            oscard = new Array(3);
            oscard[0] = verify;
            verify = option.condensedAssetContainer;
            oscard[1] = verify;
            if(golfie) { _fun00006_ip = 72; continue _fun00005 }
 64:
            golfie = option.assetContainerLightBackground;
            _fun00006_ip = 78; continue _fun00005;
 72:
            golfie = option.assetContainerDarkBackground;
 78:
            oscard[2] = golfie;
            entity['style'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    tangon = function(argFoo) { // Original name: RegularAssetTile
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = michal.product;
            golfie = michal.isDarkTheme;
            report = michal.children;
            michal = _closure1_slot7;
            tangon = undefined;
            yankee = michal.bind(tangon)();
            zuuluu = _closure1_slot3;
            michal = entity.items;
            entity = 1;
            michal = zuuluu.bind(tangon)(michal, entity);
            entity = 0;
            verify = michal[entity];
            zuuluu = _closure1_slot5;
            michal = _closure1_slot4;
            entity = {};
            offset = yankee.assetContainer;
            oscard = new Array(4);
            oscard[0] = offset;
            if(golfie) { _fun00008_ip = 93; continue _fun00007 }
 85:
            golfie = yankee.assetContainerLightBackground;
            _fun00008_ip = 99; continue _fun00007;
 93:
            golfie = yankee.assetContainerDarkBackground;
 99:
            oscard[1] = golfie;
            romeon = verify.type;
            foxtra = _closure1_slot0;
            golfie = _closure1_slot2;
            offset = 8;
            golfie = golfie[offset];
            golfie = foxtra.bind(tangon)(golfie);
            golfie = golfie.CollectiblesItemType;
            golfie = golfie.PROFILE_EFFECT;
            golfie = romeon === golfie;
            if(!golfie) { _fun00008_ip = 153; continue _fun00007 }
 147:
            golfie = yankee.profileEffectAssetContainer;
 153:
            oscard[2] = golfie;
            golfie = {};
            yankee = verify.type;
            verify = _closure1_slot0;
            option = _closure1_slot2;
            option = option[offset];
            option = verify.bind(tangon)(option);
            option = option.CollectiblesItemType;
            offset = option.AVATAR_DECORATION;
            option = '100%';
            verify = option;
            if(!(yankee === offset)) { _fun00008_ip = 209; continue _fun00007 }
 206:
            verify = 140;
 209:
            golfie['height'] = verify;
            golfie['width'] = option;
            oscard[3] = golfie;
            entity['style'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot11 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            yankee = michal.product;
            offset = michal.isDarkTheme;
            entity = michal.condensed;
            michal = michal.isPurchased;
            report = _closure1_slot6;
            if(entity) { _fun00010_ip = 153; continue _fun00009 }
 37:
            tangon = _closure1_slot11;
            zuuluu = {};
            zuuluu['product'] = yankee;
            zuuluu['isDarkTheme'] = offset;
            entity = michal;
            if(!michal) { _fun00010_ip = 89; continue _fun00009 }
 59:
            romeon = _closure1_slot5;
            verify = _closure1_slot8;
            option = {};
            option['isDarkTheme'] = offset;
            oscard = false;
            option['condensed'] = oscard;
            oscard = undefined;
            entity = romeon.bind(oscard)(verify, option);
 89:
            oscard = new Array(2);
            oscard[0] = entity;
            romeon = _closure1_slot5;
            verify = _closure1_slot9;
            option = {};
            option['product'] = yankee;
            option['isDarkTheme'] = offset;
            entity = false;
            option['condensed'] = entity;
            option['isPurchased'] = michal;
            entity = undefined;
            option = romeon.bind(entity)(verify, option);
            oscard[1] = option;
            zuuluu['children'] = oscard;
            entity = report.bind(entity)(tangon, zuuluu);
            _fun00010_ip = 267; continue _fun00009;
 153:
            tangon = _closure1_slot10;
            zuuluu = {};
            zuuluu['product'] = yankee;
            zuuluu['isDarkTheme'] = offset;
            option = michal;
            if(!option) { _fun00010_ip = 205; continue _fun00009 }
 175:
            foxtra = _closure1_slot5;
            romeon = _closure1_slot8;
            verify = {};
            verify['isDarkTheme'] = offset;
            oscard = true;
            verify['condensed'] = oscard;
            oscard = undefined;
            option = foxtra.bind(oscard)(romeon, verify);
 205:
            oscard = new Array(2);
            oscard[0] = option;
            verify = _closure1_slot5;
            option = _closure1_slot9;
            golfie = {};
            golfie['product'] = yankee;
            golfie['isDarkTheme'] = offset;
            offset = true;
            golfie['condensed'] = offset;
            golfie['isPurchased'] = michal;
            michal = undefined;
            golfie = verify.bind(michal)(option, golfie);
            oscard[1] = golfie;
            zuuluu['children'] = oscard;
            entity = report.bind(michal)(tangon, zuuluu);
 267:
            return entity;
        }
    };
    tangon = tangon.bind(golfie)(michal);
    michal = 12;
    report = report[michal];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/collectibles/native/CollectiblesShopCardAssetTile.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = 200;
    zuuluu['COLLECTIBLES_SHOP_CARD_SIZE'] = tangon;
    zuuluu['COLLECTIBLES_SHOP_CARD_VERTICAL_MARGIN'] = michal;
    return entity;
})();