// app/modules/collectibles/native/CollectiblesShopCardAssetTile.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = romeon.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot5 = option;
    tangon = tangon.jsxs;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    offset = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    tangon['assetContainer'] = offset;
    offset = {};
    yankee = 5;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    offset['borderBottomLeftRadius'] = foxtra;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.radii;
    foxtra = foxtra.sm;
    offset['borderBottomRightRadius'] = foxtra;
    tangon['profileEffectAssetContainer'] = offset;
    offset = {};
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.unsafe_rawColors;
    foxtra = foxtra.BLACK_460;
    offset['backgroundColor'] = foxtra;
    tangon['assetContainerDarkBackground'] = offset;
    offset = {};
    yankee = oscard[yankee];
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
            romeon = 8;
            zuuluu = zuuluu[romeon];
            zuuluu = offset.bind(tangon)(zuuluu);
            zuuluu = zuuluu.CollectiblesItemType;
            zuuluu = zuuluu.BUNDLE;
            if(!(verify === zuuluu)) { _fun00004_ip = 115; continue _fun00003 }
 102:
            zuuluu = null;
            if(!(zuuluu != golfie)) { _fun00004_ip = 115; continue _fun00003 }
 108:
            if(!(zuuluu == oscard)) { _fun00004_ip = 401; continue _fun00003 }
 115:
            verify = _closure1_slot3;
            zuuluu = michal.items;
            michal = 1;
            zuuluu = verify.bind(tangon)(zuuluu, michal);
            michal = 0;
            offset = zuuluu[michal];
            michal = null;
            zuuluu = michal == offset;
            verify = undefined;
            if(zuuluu) { _fun00004_ip = 156; continue _fun00003 }
 151:
            verify = offset.type;
 156:
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[romeon];
            zuuluu = yankee.bind(tangon)(zuuluu);
            zuuluu = zuuluu.CollectiblesItemType;
            zuuluu = zuuluu.AVATAR_DECORATION;
            if(!(zuuluu !== verify)) { _fun00004_ip = 351; continue _fun00003 }
 192:
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[romeon];
            zuuluu = yankee.bind(tangon)(zuuluu);
            zuuluu = zuuluu.CollectiblesItemType;
            zuuluu = zuuluu.PROFILE_EFFECT;
            if(!(zuuluu !== verify)) { _fun00004_ip = 303; continue _fun00003 }
 225:
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[romeon];
            zuuluu = yankee.bind(tangon)(zuuluu);
            zuuluu = zuuluu.CollectiblesItemType;
            zuuluu = zuuluu.NAMEPLATE;
            if(!(zuuluu !== verify)) { _fun00004_ip = 260; continue _fun00003 }
 258:
            return michal;
 260:
            verify = _closure1_slot5;
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot2;
            michal = 12;
            michal = yankee[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            michal['item'] = offset;
            michal['isPurchased'] = option;
            michal = verify.bind(tangon)(zuuluu, michal);
            return michal;
 303:
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
 351:
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
 401:
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
            romeon = michal.bind(tangon)();
            zuuluu = _closure1_slot3;
            michal = entity.items;
            entity = 1;
            michal = zuuluu.bind(tangon)(michal, entity);
            entity = 0;
            verify = michal[entity];
            zuuluu = _closure1_slot5;
            michal = _closure1_slot4;
            entity = {};
            offset = romeon.assetContainer;
            oscard = new Array(4);
            oscard[0] = offset;
            if(golfie) { _fun00006_ip = 93; continue _fun00005 }
 85:
            golfie = romeon.assetContainerLightBackground;
            _fun00006_ip = 99; continue _fun00005;
 93:
            golfie = romeon.assetContainerDarkBackground;
 99:
            oscard[1] = golfie;
            offset = null;
            golfie = offset == verify;
            foxtra = undefined;
            if(golfie) { _fun00006_ip = 119; continue _fun00005 }
 114:
            foxtra = verify.type;
 119:
            backup = _closure1_slot0;
            golfie = _closure1_slot2;
            yankee = 8;
            golfie = golfie[yankee];
            golfie = backup.bind(tangon)(golfie);
            golfie = golfie.CollectiblesItemType;
            golfie = golfie.PROFILE_EFFECT;
            golfie = foxtra === golfie;
            if(!golfie) { _fun00006_ip = 164; continue _fun00005 }
 158:
            golfie = romeon.profileEffectAssetContainer;
 164:
            oscard[2] = golfie;
            golfie = {};
            romeon = offset == verify;
            foxtra = undefined;
            if(romeon) { _fun00006_ip = 184; continue _fun00005 }
 179:
            foxtra = verify.type;
 184:
            backup = _closure1_slot0;
            romeon = _closure1_slot2;
            romeon = romeon[yankee];
            romeon = backup.bind(tangon)(romeon);
            romeon = romeon.CollectiblesItemType;
            romeon = romeon.AVATAR_DECORATION;
            if(!(foxtra !== romeon)) { _fun00006_ip = 270; continue _fun00005 }
 217:
            romeon = offset == verify;
            offset = undefined;
            if(romeon) { _fun00006_ip = 231; continue _fun00005 }
 226:
            offset = verify.type;
 231:
            verify = _closure1_slot0;
            option = _closure1_slot2;
            option = option[yankee];
            option = verify.bind(tangon)(option);
            option = option.CollectiblesItemType;
            verify = option.NAMEPLATE;
            option = '100%';
            if(!(offset === verify)) { _fun00006_ip = 273; continue _fun00005 }
 270:
            option = 140;
 273:
            golfie['height'] = option;
            option = '100%';
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
    michal = tangon.bind(golfie)(michal);
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/native/CollectiblesShopCardAssetTile.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    michal = 200;
    zuuluu['COLLECTIBLES_SHOP_CARD_SIZE'] = michal;
    michal = 12;
    zuuluu['COLLECTIBLES_SHOP_CARD_VERTICAL_MARGIN'] = michal;
    return entity;
})();