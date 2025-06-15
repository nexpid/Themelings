// app/modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx
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
    offset = {'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden', 'height': '100%', 'width': '100%'};
    yankee = 5;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.colors;
    foxtra = foxtra.BACKGROUND_SURFACE_HIGH;
    offset['backgroundColor'] = foxtra;
    tangon['assetContainer'] = offset;
    offset = {'position': 'absolute', 'opacity': 1, 'color': null, 'fontWeight': 'bold'};
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.colors;
    yankee = yankee.ICON_DEFAULT;
    offset['color'] = yankee;
    tangon['checkmark'] = offset;
    offset = {'position': 'absolute', 'top': 0, 'zIndex': 2, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%', 'height': '75%'};
    tangon['overlayContainer'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot7 = tangon;
    tangon = function() { // Original name: PurchasedAssetOverlay
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
        oscard = report.CheckmarkLargeBoldIcon;
        report = {};
        option = 'lg';
        report['size'] = option;
        golfie = golfie.checkmark;
        report['style'] = golfie;
        report = zuuluu.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot8 = tangon;
    tangon = function(argFoo) { // Original name: Asset
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.product;
            report = entity.isDarkTheme;
            option = entity.isPurchased;
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot2;
            tangon = 7;
            oscard = zuuluu[tangon];
            tangon = undefined;
            golfie = yankee.bind(tangon)(oscard);
            oscard = golfie.useShopProductItems;
            golfie = oscard.bind(golfie)(michal);
            oscard = golfie.firstProfileEffect;
            golfie = golfie.firstAvatarDecoration;
            verify = _closure1_slot7;
            offset = verify.bind(tangon)();
            verify = michal.type;
            foxtra = 8;
            zuuluu = zuuluu[foxtra];
            zuuluu = yankee.bind(tangon)(zuuluu);
            zuuluu = zuuluu.CollectiblesItemType;
            zuuluu = zuuluu.BUNDLE;
            if(!(verify === zuuluu)) { _fun00002_ip = 123; continue _fun00001 }
 110:
            zuuluu = null;
            if(!(zuuluu != golfie)) { _fun00002_ip = 123; continue _fun00001 }
 116:
            if(!(zuuluu == oscard)) { _fun00002_ip = 356; continue _fun00001 }
 123:
            verify = _closure1_slot3;
            zuuluu = michal.items;
            michal = 1;
            zuuluu = verify.bind(tangon)(zuuluu, michal);
            michal = 0;
            romeon = zuuluu[michal];
            michal = null;
            zuuluu = michal == romeon;
            verify = undefined;
            if(zuuluu) { _fun00002_ip = 164; continue _fun00001 }
 159:
            verify = romeon.type;
 164:
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[foxtra];
            zuuluu = yankee.bind(tangon)(zuuluu);
            zuuluu = zuuluu.CollectiblesItemType;
            zuuluu = zuuluu.AVATAR_DECORATION;
            if(!(zuuluu !== verify)) { _fun00002_ip = 280; continue _fun00001 }
 197:
            yankee = _closure1_slot0;
            zuuluu = _closure1_slot2;
            zuuluu = zuuluu[foxtra];
            zuuluu = yankee.bind(tangon)(zuuluu);
            zuuluu = zuuluu.CollectiblesItemType;
            zuuluu = zuuluu.PROFILE_EFFECT;
            if(!(zuuluu !== verify)) { _fun00002_ip = 232; continue _fun00001 }
 230:
            return michal;
 232:
            verify = _closure1_slot5;
            zuuluu = _closure1_slot1;
            yankee = _closure1_slot2;
            michal = 11;
            michal = yankee[michal];
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = {};
            michal['item'] = romeon;
            michal['isPurchased'] = option;
            michal['isDarkTheme'] = report;
            michal = verify.bind(tangon)(zuuluu, michal);
            return michal;
 280:
            verify = _closure1_slot5;
            zuuluu = _closure1_slot4;
            michal = {};
            offset = offset.overlayContainer;
            michal['style'] = offset;
            yankee = _closure1_slot1;
            foxtra = _closure1_slot2;
            offset = 10;
            offset = foxtra[offset];
            yankee = yankee.bind(tangon)(offset);
            offset = {};
            offset['isPurchased'] = option;
            offset['item'] = romeon;
            romeon = 100;
            offset['size'] = romeon;
            offset = verify.bind(tangon)(yankee, offset);
            michal['children'] = offset;
            michal = verify.bind(tangon)(zuuluu, michal);
            return michal;
 356:
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
        entity = argFoo;
        report = entity.children;
        michal = _closure1_slot7;
        tangon = undefined;
        oscard = michal.bind(tangon)();
        zuuluu = _closure1_slot5;
        michal = _closure1_slot4;
        entity = {};
        golfie = oscard.assetContainer;
        oscard = new Array(1);
        oscard[0] = golfie;
        entity['style'] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot10 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            if(!golfie) { _fun00004_ip = 68; continue _fun00003 }
 50:
            romeon = _closure1_slot5;
            yankee = _closure1_slot8;
            option = undefined;
            report = {};
            golfie = romeon.bind(option)(yankee, report);
 68:
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
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/collectibles/native/CollectiblesShopCardAssetTileV2.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();