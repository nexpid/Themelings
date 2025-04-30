// app/modules/collectibles/hooks/useShopProductItems.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    report = golfie[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot4 = tangon;
    tangon = function() {
        tangon = _closure1_slot3;
        zuuluu = function(argFoo) { // Original name: ItemsSortingHat
            zuuluu = this;
            tangon = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            tangon = zuuluu.sortByTypes;
            michal = argFoo;
            michal = tangon.bind(zuuluu)(michal);
            zuuluu['itemsByTypes'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'firstAvatarDecoration';
        entity['key'] = michal;
        michal = function() { // Original name: get
            zuuluu = this;
            michal = zuuluu.getFirstItemByType;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 3;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.CollectiblesItemType;
            entity = entity.AVATAR_DECORATION;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['get'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'firstProfileEffect';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            zuuluu = this;
            michal = zuuluu.getFirstItemByType;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 3;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.CollectiblesItemType;
            entity = entity.PROFILE_EFFECT;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['get'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'getFirstItemByType';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = this;
                zuuluu = entity.itemsByTypes;
                michal = zuuluu.get;
                entity = argFoo;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = null;
                if(!(michal == zuuluu)) { _fun00002_ip = 32; continue _fun00001 }
 28:
                zuuluu = new Array(0);
 32:
                entity = 0;
                entity = zuuluu[entity];
                if(!(michal == entity)) { _fun00002_ip = 46; continue _fun00001 }
 42:
                michal = undefined;
                return michal;
 46:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'sortByTypes';
        entity['key'] = oscard;
        report = function(argFoo) { // Original name: value
            tangon = argFoo;
            zuuluu = tangon.reduce;
            entity = global;
            entity = entity.Map;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            golfie = michal;
            entity = new golfie[entity](oscard);
            michal = entity instanceof Object ? entity : michal;
            entity = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    tangon = argBar;
                    zuuluu = entity.get;
                    michal = tangon.type;
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = null;
                    if(!(michal == zuuluu)) { _fun00004_ip = 53; continue _fun00003 }
 27:
                    oscard = entity.set;
                    report = tangon.type;
                    michal = new Array(1);
                    michal[0] = tangon;
                    michal = oscard.bind(entity)(report, michal);
                    _fun00004_ip = 63; continue _fun00003;
 53:
                    michal = zuuluu.push;
                    michal = michal.bind(zuuluu)(tangon);
 63:
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot5 = tangon;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/collectibles/hooks/useShopProductItems.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['ItemsSortingHat'] = tangon;
    tangon = function(argFoo) {
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot4;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure1_slot5;
            entity = _closure2_slot0;
            tangon = entity.items;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            report = michal;
            entity = new report[zuuluu](tangon, zuuluu);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        };
        michal = zuuluu.bind(tangon)(entity, michal);
        entity = {};
        zuuluu = michal.firstProfileEffect;
        entity['firstProfileEffect'] = zuuluu;
        michal = michal.firstAvatarDecoration;
        entity['firstAvatarDecoration'] = michal;
        return entity;
    };
    zuuluu['useShopProductItems'] = tangon;
    michal = function(argFoo) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            michal = 4;
            zuuluu = option[michal];
            entity = undefined;
            zuuluu = golfie.bind(entity)(zuuluu);
            oscard = zuuluu.intl;
            tangon = oscard.string;
            zuuluu = option[michal];
            zuuluu = golfie.bind(entity)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.7v0T9P;
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = option[michal];
            zuuluu = golfie.bind(entity)(zuuluu);
            oscard = zuuluu.intl;
            zuuluu = oscard.string;
            michal = option[michal];
            michal = golfie.bind(entity)(michal);
            michal = michal.t;
            michal = michal.wR5wOj;
            offset = zuuluu.bind(oscard)(michal);
            golfie = report.bundledProducts;
            oscard = null;
            zuuluu = tangon;
            michal = offset;
            if(!(oscard != golfie)) { _fun00006_ip = 223; continue _fun00005 }
 125:
            golfie = report.bundledProducts;
            option = golfie.length;
            golfie = 0;
            if(!(option > golfie)) { _fun00006_ip = 169; continue _fun00005 }
 142:
            option = report.bundledProducts;
            verify = option[golfie];
            yankee = oscard == verify;
            option = undefined;
            if(yankee) { _fun00006_ip = 166; continue _fun00005 }
 161:
            option = verify.name;
 166:
            tangon = option;
 169:
            option = report.bundledProducts;
            verify = option.length;
            option = 1;
            zuuluu = tangon;
            michal = offset;
            if(!(verify > option)) { _fun00006_ip = 223; continue _fun00005 }
 193:
            report = report.bundledProducts;
            report = report[golfie];
            oscard = oscard == report;
            entity = undefined;
            if(oscard) { _fun00006_ip = 217; continue _fun00005 }
 212:
            entity = report.name;
 217:
            michal = entity;
            zuuluu = tangon;
 223:
            entity = {};
            entity['itemOneName'] = zuuluu;
            entity['itemTwoName'] = michal;
            return entity;
        }
    };
    zuuluu['getBundleItemNames'] = michal;
    return entity;
})();