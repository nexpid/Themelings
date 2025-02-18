// app/modules/guild_scheduled_events/useSelectStage.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_scheduled_events/useSelectStage.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useSelectStage
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        michal = 5;
        tangon = tangon[michal];
        michal = undefined;
        option = report.bind(michal)(tangon);
        golfie = option.useStateFromStores;
        tangon = _closure1_slot6;
        oscard = new Array(1);
        oscard[0] = tangon;
        report = function() {
            michal = _closure1_slot6;
            entity = michal.getVoiceChannelId;
            entity = entity.bind(michal)();
            return entity;
        };
        tangon = new Array(0);
        tangon = golfie.bind(option)(oscard, report, tangon);
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        oscard = report.useState;
        golfie = oscard.bind(report)(tangon);
        oscard = _closure1_slot3;
        zuuluu = 2;
        golfie = oscard.bind(michal)(golfie, zuuluu);
        zuuluu = 0;
        zuuluu = golfie[zuuluu];
        var _closure2_slot1 = zuuluu;
        oscard = 1;
        oscard = golfie[oscard];
        var _closure2_slot2 = oscard;
        golfie = report.useEffect;
        oscard = new Array(1);
        oscard[0] = tangon;
        tangon = function() {
            michal = global;
            report = michal.setTimeout;
            tangon = undefined;
            zuuluu = function() {
                zuuluu = _closure2_slot2;
                michal = _closure2_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = 500;
            michal = report.bind(tangon)(zuuluu, michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = global;
                zuuluu = entity.clearTimeout;
                michal = _closure3_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            return entity;
        };
        tangon = golfie.bind(report)(tangon, oscard);
        tangon = report.useCallback;
        entity = function() {
            tangon = _closure1_slot2;
            zuuluu = undefined;
            michal = function* (argFoo, argBar) {
                entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00002_ip = 180; continue _fun00001 }
 10:
                        report = argFoo;
                        golfie = argBar;
                        michal = undefined;
                        zuuluu = undefined;
 20: // try_start_0
                        option = _closure2_slot1;
                        tangon = golfie;
                        if(!(option === tangon)) { _fun00002_ip = 63; continue _fun00001 }
 34:
                        offset = _closure1_slot5;
                        verify = offset.getChannel;
                        option = golfie;
                        verify = verify.bind(offset)(option);
                        zuuluu = verify;
                        option = null;
                        if(!(option == verify)) { _fun00002_ip = 125; continue _fun00001 }
 63:
                        oscard = _closure2_slot2;
                        option = golfie;
                        oscard = oscard.bind(michal)(option);
                        golfie = _closure1_slot0;
                        verify = _closure1_slot1;
                        oscard = 6;
                        oscard = verify[oscard];
                        golfie = golfie.bind(michal)(oscard);
                        oscard = golfie.connectOrLurkStage;
                        report = oscard.bind(golfie)(report, option);
                        SaveGenerator(address=114);
 112:
                        return report;
 114:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                        if(oscard) { _fun00002_ip = 122; continue _fun00001 }
 120: // try_end0
                        _fun00002_ip = 177; continue _fun00001;
 122:
                        return report;
 125: // try_start_1
                        report = _closure1_slot0;
                        oscard = _closure1_slot1;
                        tangon = 6;
                        tangon = oscard[tangon];
                        report = report.bind(michal)(tangon);
                        tangon = report.navigateToStage;
                        zuuluu = tangon.bind(report)(zuuluu);
 156: // try_end1
                        zuuluu = undefined;
                        return zuuluu;
 161: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=2);
                        tangon = _closure2_slot2;
                        zuuluu = null;
                        zuuluu = tangon.bind(michal)(zuuluu);
 177:
                        return michal;
 180:
                        return entity;
                    }
                };
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = undefined;
                tangon = _closure3_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            return entity;
        };
        michal = entity.bind(michal)();
        entity = new Array(1);
        entity[0] = zuuluu;
        michal = tangon.bind(report)(michal, entity);
        entity = new Array(2);
        entity[0] = zuuluu;
        entity[1] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();