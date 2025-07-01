// app/modules/main_tabs_v2/native/settings/renderer/SettingSegmentedControlRenderer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 344; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot13;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot13;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 344:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    offset = 1;
    golfie = oscard[offset];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.getSelectedSearchResult;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.RendererType;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot8 = golfie;
    golfie = tangon.Fragment;
    var _closure1_slot9 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {};
    yankee = 7;
    foxtra = oscard[yankee];
    foxtra = romeon.bind(entity)(foxtra);
    foxtra = foxtra.spacing;
    foxtra = foxtra.PX_16;
    verify['paddingHorizontal'] = foxtra;
    yankee = oscard[yankee];
    yankee = romeon.bind(entity)(yankee);
    yankee = yankee.spacing;
    yankee = yankee.PX_16;
    verify['paddingTop'] = yankee;
    tangon['controlContainer'] = verify;
    verify = {};
    verify['flex'] = offset;
    tangon['pageContainer'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/renderer/SettingSegmentedControlRenderer.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: SettingSegmentedControl
        tangon = argFoo;
        yankee = tangon.settings;
        var _closure2_slot0 = yankee;
        michal = null;
        zuuluu = Object.create(michal);
        oscard = 0;
        zuuluu['settings'] = oscard;
        output = {};
        sizing = tangon;
        kiloes = zuuluu;
        michal = copyDataProperties(output, sizing, kiloes);
        var _closure2_slot1 = michal;
        michal = _closure1_slot11;
        tangon = undefined;
        verify = michal.bind(tangon)();
        offset = _closure1_slot4;
        michal = offset.useState;
        michal = michal.bind(offset)(oscard);
        romeon = _closure1_slot3;
        golfie = 2;
        michal = romeon.bind(tangon)(michal, golfie);
        option = michal[oscard];
        zuuluu = 1;
        michal = michal[zuuluu];
        var _closure2_slot2 = michal;
        foxtra = offset.useState;
        michal = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = _closure1_slot6;
                option = undefined;
                report = entity.bind(option)();
                entity = null;
                if(!(entity != report)) { _fun00008_ip = 146; continue _fun00007 }
 22:
                zuuluu = _closure2_slot0;
                entity = zuuluu.indexOf;
                entity = entity.bind(zuuluu)(report);
                oscard = -1;
                if(!(oscard === entity)) { _fun00008_ip = 161; continue _fun00007 }
 49:
                zuuluu = _closure1_slot12;
                tangon = _closure1_slot1;
                verify = _closure1_slot2;
                michal = 8;
                michal = verify[michal];
                tangon = tangon.bind(option)(michal);
                michal = tangon.getAncestors;
                michal = michal.bind(tangon)(report);
                report = zuuluu.bind(option)(michal);
                zuuluu = report.bind(option)();
                michal = zuuluu.done;
                tangon = zuuluu;
                if(michal) { _fun00008_ip = 146; continue _fun00007 }
 104:
                verify = tangon.value;
                zuuluu = _closure2_slot0;
                michal = zuuluu.indexOf;
                michal = michal.bind(zuuluu)(verify);
                if(!(oscard === michal)) { _fun00008_ip = 144; continue _fun00007 }
 127:
                verify = report.bind(option)();
                zuuluu = verify.done;
                tangon = verify;
                if(zuuluu) { _fun00008_ip = 146; continue _fun00007 }
 142:
                _fun00008_ip = 104; continue _fun00007;
 144:
                return michal;
 146:
                michal = _closure2_slot1;
                michal = michal.defaultIndex;
                return michal;
 161:
                return entity;
            }
        };
        michal = foxtra.bind(offset)(michal);
        michal = romeon.bind(tangon)(michal, golfie);
        golfie = michal[oscard];
        michal = michal[zuuluu];
        oscard = offset.useCallback;
        zuuluu = function(argFoo) {
            entity = argFoo;
            entity = entity.nativeEvent;
            entity = entity.layout;
            zuuluu = entity.width;
            michal = _closure2_slot2;
            entity = undefined;
            michal = michal.bind(entity)(zuuluu);
            return entity;
        };
        michal = new Array(0);
        oscard = oscard.bind(offset)(zuuluu, michal);
        zuuluu = offset.useMemo;
        michal = new Array(1);
        michal[0] = yankee;
        entity = function() {
            entity = new Array(0);
            var _closure3_slot0 = entity;
            tangon = _closure2_slot0;
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                oscard = argFoo;
                verify = _closure1_slot0;
                yankee = _closure1_slot2;
                entity = 9;
                michal = yankee[entity];
                entity = undefined;
                michal = verify.bind(entity)(michal);
                michal = michal.SETTING_RENDERER_CONFIG;
                michal = michal[oscard];
                tangon = _closure1_slot1;
                zuuluu = 10;
                zuuluu = yankee[zuuluu];
                golfie = tangon.bind(entity)(zuuluu);
                option = michal.type;
                zuuluu = _closure1_slot7;
                zuuluu = zuuluu.ROUTE;
                tangon = global;
                tangon = tangon.HermesInternal;
                offset = tangon.concat;
                tangon = 'Invalid setting type for segmented control: ';
                tangon = offset.bind(tangon)(oscard);
                zuuluu = option === zuuluu;
                zuuluu = golfie.bind(entity)(zuuluu, tangon);
                offset = michal.title;
                zuuluu = michal.screen;
                michal = zuuluu.getComponent;
                golfie = michal.bind(zuuluu)();
                tangon = _closure3_slot0;
                zuuluu = tangon.push;
                michal = {};
                option = 11;
                option = yankee[option];
                verify = verify.bind(entity)(option);
                option = verify.transformSettingTitle;
                option = option.bind(verify)(offset);
                michal['label'] = option;
                michal['id'] = oscard;
                oscard = _closure1_slot8;
                report = {};
                report = oscard.bind(entity)(golfie, report);
                michal['page'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        yankee = zuuluu.bind(offset)(entity, michal);
        offset = _closure1_slot0;
        romeon = _closure1_slot2;
        entity = 12;
        entity = romeon[entity];
        zuuluu = offset.bind(tangon)(entity);
        michal = zuuluu.useSegmentedControlState;
        entity = {};
        entity['items'] = yankee;
        entity['pageWidth'] = option;
        entity['defaultIndex'] = golfie;
        yankee = michal.bind(zuuluu)(entity);
        zuuluu = _closure1_slot10;
        michal = _closure1_slot9;
        entity = {};
        option = _closure1_slot8;
        golfie = _closure1_slot5;
        report = {};
        foxtra = verify.controlContainer;
        report['style'] = foxtra;
        report['onLayout'] = oscard;
        oscard = 13;
        oscard = romeon[oscard];
        oscard = offset.bind(tangon)(oscard);
        foxtra = oscard.SegmentedControl;
        oscard = {};
        oscard['state'] = yankee;
        oscard = option.bind(tangon)(foxtra, oscard);
        report['children'] = oscard;
        oscard = option.bind(tangon)(golfie, report);
        report = new Array(2);
        report[0] = oscard;
        oscard = {};
        verify = verify.pageContainer;
        oscard['style'] = verify;
        verify = 14;
        verify = romeon[verify];
        verify = offset.bind(tangon)(verify);
        offset = verify.SegmentedControlPages;
        verify = {};
        verify['state'] = yankee;
        verify = option.bind(tangon)(offset, verify);
        oscard['children'] = verify;
        oscard = option.bind(tangon)(golfie, oscard);
        report[1] = oscard;
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();