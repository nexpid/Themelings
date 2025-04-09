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
    offset = {'position': 'absolute', 'opacity': 1};
    tangon['checkmark'] = offset;
    offset = {'position': 'absolute', 'top': 0, 'zIndex': 2, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'width': 150, 'height': 140};
    tangon['overlayContainer'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot7 = tangon;
    tangon = function(argFoo) { // Original name: PurchasedAssetOverlay
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            verify = entity.isDarkTheme;
            entity = _closure1_slot7;
            tangon = undefined;
            golfie = entity.bind(tangon)();
            zuuluu = _closure1_slot5;
            michal = _closure1_slot4;
            entity = {};
            oscard = golfie.overlayContainer;
            entity['style'] = oscard;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            report = 6;
            report = option[report];
            report = oscard.bind(tangon)(report);
            oscard = report.CheckmarkLargeIcon;
            report = {};
            option = 'lg';
            report['size'] = option;
            option = 'black';
            if(!verify) { _fun00002_ip = 89; continue _fun00001 }
 85:
            option = 'white';
 89:
            report['color'] = option;
            golfie = golfie.checkmark;
            report['style'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
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
            report = entity.isDarkTheme;
            option = entity.isPurchased;
            offset = _closure1_slot0;
            zuuluu = _closure1_slot2;
            tangon = 7;
            oscard = zuuluu[tangon];
            tangon = undefined;
            golfie = offset.bind(tangon)(oscard);
            oscard = golfie.useShopProductItems;
            golfie = oscard.bind(golfie)(michal);
            oscard = golfie.firstProfileEffect;
            golfie = golfie.firstAvatarDecoration;
            verify = michal.type;
            yankee = 8;
            zuuluu = zuuluu[yankee];
            zuuluu = offset.bind(tangon)(zuuluu);
            zuuluu = zuuluu.CollectiblesItemType;
            zuuluu = zuuluu.BUNDLE;
            if(!(verify === zuuluu)) { _fun00004_ip = 115; continue _fun00003 }
 102:
            zuuluu = null;
            if(!(zuuluu != golfie)) { _fun00004_ip = 115; continue _fun00003 }
 108:
            if(!(zuuluu == oscard)) { _fun00004_ip = 313; continue _fun00003 }
 115:
            verify = _closure1_slot3;
            zuuluu = michal.items;
            michal = 1;
            zuuluu = verify.bind(tangon)(zuuluu, michal);
            michal = 0;
            offset = zuuluu[michal];
            zuuluu = offset.type;
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[yankee];
            michal = verify.bind(tangon)(michal);
            michal = michal.CollectiblesItemType;
            michal = michal.AVATAR_DECORATION;
            if(!(michal !== zuuluu)) { _fun00004_ip = 263; continue _fun00003 }
 178:
            verify = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[yankee];
            michal = verify.bind(tangon)(michal);
            michal = michal.CollectiblesItemType;
            michal = michal.PROFILE_EFFECT;
            if(!(michal !== zuuluu)) { _fun00004_ip = 215; continue _fun00003 }
 211:
            michal = null;
            return michal;
 215:
            verify = _closure1_slot5;
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot2;
            michal = 11;
            michal = yankee[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            michal['item'] = offset;
            michal['isPurchased'] = option;
            michal['isDarkTheme'] = report;
            michal = verify.bind(tangon)(zuuluu, michal);
            return michal;
 263:
            verify = _closure1_slot5;
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot2;
            michal = 10;
            michal = yankee[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            michal['isPurchased'] = option;
            michal['item'] = offset;
            offset = 120;
            michal['size'] = offset;
            michal = verify.bind(tangon)(zuuluu, michal);
            return michal;
 313:
            zuuluu = _closure1_slot5;
            michal = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 9;
            entity = verify[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['isPurchased'] = option;
            entity['deco'] = golfie;
            entity['pfx'] = oscard;
            entity['isDarkTheme'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    tangon = function(argFoo) { // Original name: AssetTileInternal
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
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
            if(golfie) { _fun00006_ip = 93; continue _fun00005 }
 85:
            golfie = yankee.assetContainerLightBackground;
            _fun00006_ip = 99; continue _fun00005;
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
            if(!golfie) { _fun00006_ip = 153; continue _fun00005 }
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
            if(!(yankee === offset)) { _fun00006_ip = 209; continue _fun00005 }
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
    var _closure1_slot10 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            offset = entity.product;
            verify = entity.isDarkTheme;
            entity = entity.isPurchased;
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot10;
            michal = {};
            michal['product'] = offset;
            michal['isDarkTheme'] = verify;
            golfie = entity;
            if(!golfie) { _fun00008_ip = 73; continue _fun00007 }
 50:
            romeon = _closure1_slot5;
            yankee = _closure1_slot8;
            option = {};
            option['isDarkTheme'] = verify;
            report = undefined;
            golfie = romeon.bind(report)(yankee, option);
 73:
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot5;
            golfie = _closure1_slot9;
            oscard = {};
            oscard['product'] = offset;
            oscard['isDarkTheme'] = verify;
            oscard['isPurchased'] = entity;
            entity = undefined;
            oscard = option.bind(entity)(golfie, oscard);
            report[1] = oscard;
            michal['children'] = report;
            entity = tangon.bind(entity)(zuuluu, michal);
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