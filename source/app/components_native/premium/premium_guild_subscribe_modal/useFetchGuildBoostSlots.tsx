// app/components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'components_native/premium/premium_guild_subscribe_modal/useFetchGuildBoostSlots.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useFetchGuildBoostSlots
        report = _closure1_slot5;
        tangon = report.useState;
        entity = true;
        oscard = tangon.bind(report)(entity);
        tangon = _closure1_slot4;
        option = undefined;
        entity = 2;
        oscard = tangon.bind(option)(oscard, entity);
        entity = 0;
        entity = oscard[entity];
        var _closure2_slot0 = entity;
        tangon = 1;
        tangon = oscard[tangon];
        var _closure2_slot1 = tangon;
        golfie = _closure1_slot0;
        verify = _closure1_slot2;
        tangon = 5;
        oscard = verify[tangon];
        romeon = golfie.bind(option)(oscard);
        yankee = romeon.useStateFromStores;
        oscard = _closure1_slot6;
        offset = new Array(1);
        offset[0] = oscard;
        oscard = function() {
            entity = _closure1_slot6;
            entity = entity.hasFetched;
            return entity;
        };
        oscard = yankee.bind(romeon)(offset, oscard);
        var _closure2_slot2 = oscard;
        tangon = verify[tangon];
        option = golfie.bind(option)(tangon);
        golfie = option.useStateFromStores;
        zuuluu = _closure1_slot7;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            michal = _closure1_slot7;
            entity = michal.getState;
            entity = entity.bind(michal)();
            return entity;
        };
        golfie = golfie.bind(option)(tangon, zuuluu);
        var _closure2_slot3 = golfie;
        zuuluu = report.useRef;
        zuuluu = zuuluu.bind(report)(golfie);
        var _closure2_slot4 = zuuluu;
        tangon = report.useEffect;
        zuuluu = new Array(3);
        zuuluu[0] = golfie;
        zuuluu[1] = oscard;
        zuuluu[2] = entity;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                if(entity) { _fun00002_ip = 72; continue _fun00001 }
 10:
                michal = _closure2_slot3;
                entity = _closure2_slot4;
                entity = entity.current;
                if(!(michal !== entity)) { _fun00002_ip = 103; continue _fun00001 }
 27:
                michal = _closure2_slot3;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 6;
                tangon = tangon[entity];
                entity = undefined;
                entity = report.bind(entity)(tangon);
                entity = entity.AppStates;
                entity = entity.ACTIVE;
                if(!(michal === entity)) { _fun00002_ip = 103; continue _fun00001 }
 72:
                entity = function() {
                    tangon = _closure1_slot3;
                    zuuluu = undefined;
                    michal = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00004_ip = 195; continue _fun00003 }
 10:
                                verify = global;
                                oscard = verify.Promise;
                                report = oscard.all;
                                tangon = _closure1_slot1;
                                zuuluu = _closure1_slot2;
                                michal = 7;
                                michal = zuuluu[michal];
                                zuuluu = undefined;
                                tangon = tangon.bind(zuuluu)(michal);
                                michal = tangon.init;
                                tangon = michal.bind(tangon)();
                                michal = new Array(3);
                                michal[0] = tangon;
                                option = _closure2_slot2;
                                if(option) { _fun00004_ip = 109; continue _fun00003 }
 77:
                                offset = _closure1_slot0;
                                yankee = _closure1_slot2;
                                option = 8;
                                option = yankee[option];
                                offset = offset.bind(zuuluu)(option);
                                option = offset.fetchGuildBoostSlots;
                                option = option.bind(offset)();
                                _fun00004_ip = 125; continue _fun00003;
 109:
                                offset = verify.Promise;
                                verify = offset.resolve;
                                option = verify.bind(offset)();
 125:
                                michal[1] = option;
                                option = _closure1_slot0;
                                verify = _closure1_slot2;
                                golfie = 8;
                                golfie = verify[golfie];
                                option = option.bind(zuuluu)(golfie);
                                golfie = option.fetchAppliedGuildBoostsForUser;
                                golfie = golfie.bind(option)();
                                michal[2] = golfie;
                                michal = report.bind(oscard)(michal);
                                SaveGenerator(address=172);
 170:
                                return michal;
 172:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                                if(report) { _fun00004_ip = 192; continue _fun00003 }
 178:
                                report = _closure2_slot1;
                                tangon = false;
                                tangon = report.bind(zuuluu)(tangon);
                                return zuuluu;
 192:
                                return michal;
 195:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    michal = tangon.bind(zuuluu)(michal);
                    var _closure4_slot0 = michal;
                    entity = function() {
                        entity = undefined;
                        tangon = _closure4_slot0;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    return entity;
                };
                michal = undefined;
                entity = entity.bind(michal)();
                tangon = _closure2_slot4;
                zuuluu = _closure2_slot3;
                tangon['current'] = zuuluu;
                entity = entity.bind(michal)();
 103:
                entity = undefined;
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();