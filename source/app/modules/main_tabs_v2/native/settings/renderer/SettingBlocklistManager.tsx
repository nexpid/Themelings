// app/modules/main_tabs_v2/native/settings/renderer/SettingBlocklistManager.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = golfie.memo;
    michal = function() { // Original name: SettingBlocklistManager
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = _closure1_slot4;
            tangon = report.getField;
            entity = 'blocklist';
            backup = tangon.bind(report)(entity);
            foxtra = new Array(0);
            var _closure2_slot0 = foxtra;
            romeon = new Array(0);
            var _closure2_slot1 = romeon;
            entity = global;
            report = entity.Object;
            tangon = report.entries;
            oscard = _closure1_slot0;
            golfie = _closure1_slot1;
            entity = 3;
            entity = golfie[entity];
            yankee = undefined;
            entity = oscard.bind(yankee)(entity);
            entity = entity.SETTING_RENDERER_CONFIG;
            offset = tangon.bind(report)(entity);
            entity = offset.length;
            verify = 0;
            tangon = verify < entity;
            option = false;
            golfie = 2;
            oscard = 1;
            entity = null;
            report = 0;
            if(!tangon) { _fun00002_ip = 227; continue _fun00001 }
 113:
            kiloes = offset[report];
            tangon = _closure1_slot2;
            tangon = tangon.bind(yankee)(kiloes, golfie);
            kiloes = tangon[verify];
            tangon = tangon[oscard];
            sizing = tangon.usePredicate;
            output = entity == sizing;
            tangon = undefined;
            if(output) { _fun00002_ip = 154; continue _fun00001 }
 150:
            tangon = sizing.bind(yankee)();
 154:
            sizing = option === tangon;
            if(!sizing) { _fun00002_ip = 186; continue _fun00001 }
 161:
            tangon = backup.has;
            tangon = tangon.bind(backup)(kiloes);
            if(tangon) { _fun00002_ip = 186; continue _fun00001 }
 174:
            tangon = foxtra.push;
            tangon = tangon.bind(foxtra)(kiloes);
            _fun00002_ip = 215; continue _fun00001;
 186:
            tangon = !sizing;
            if(sizing) { _fun00002_ip = 202; continue _fun00001 }
 192:
            sizing = backup.has;
            tangon = sizing.bind(backup)(kiloes);
 202:
            if(!tangon) { _fun00002_ip = 215; continue _fun00001 }
 205:
            tangon = romeon.push;
            tangon = tangon.bind(romeon)(kiloes);
 215:
            report = report + 1;
            tangon = offset.length;
            if(report < tangon) { _fun00002_ip = 113; continue _fun00001 }
 227:
            tangon = _closure1_slot3;
            zuuluu = tangon.useEffect;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.length;
                    tangon = 0;
                    if(!(!(zuuluu > tangon))) { _fun00004_ip = 33; continue _fun00003 }
 20:
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.length;
                    if(!(zuuluu > tangon)) { _fun00004_ip = 147; continue _fun00003 }
 33:
                    zuuluu = _closure1_slot4;
                    report = zuuluu.getField;
                    tangon = 'blocklist';
                    option = report.bind(zuuluu)(tangon);
                    tangon = global;
                    tangon = tangon.Set;
                    report = tangon.prototype;
                    report = Object.create(report, {constructor: {value: tangon}});
                    verify = report;
                    tangon = new verify[tangon](option, golfie);
                    tangon = tangon instanceof Object ? tangon : report;
                    var _closure3_slot0 = tangon;
                    golfie = _closure2_slot0;
                    oscard = golfie.forEach;
                    report = function(argFoo) {
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.add;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    report = oscard.bind(golfie)(report);
                    report = _closure2_slot1;
                    michal = report.forEach;
                    entity = function(argFoo) {
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.delete;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    entity = michal.bind(report)(entity);
                    michal = zuuluu.setState;
                    entity = {};
                    entity['blocklist'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
 147:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/renderer/SettingBlocklistManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();