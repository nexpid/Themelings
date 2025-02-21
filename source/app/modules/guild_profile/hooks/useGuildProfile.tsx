// app/modules/guild_profile/hooks/useGuildProfile.tsx
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_profile/hooks/useGuildProfile.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useGuildProfile
        golfie = argFoo;
        var _closure2_slot0 = golfie;
        oscard = _closure1_slot0;
        verify = _closure1_slot1;
        michal = 3;
        entity = verify[michal];
        option = undefined;
        romeon = oscard.bind(option)(entity);
        yankee = romeon.useStateFromStores;
        entity = _closure1_slot4;
        offset = new Array(1);
        offset[0] = entity;
        report = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.getProfile;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report = yankee.bind(romeon)(offset, report);
        michal = verify[michal];
        verify = oscard.bind(option)(michal);
        oscard = verify.useStateFromStores;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            zuuluu = _closure1_slot4;
            michal = zuuluu.getFetchStatus;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = oscard.bind(verify)(michal, entity);
        entity = {};
        entity['guildProfile'] = report;
        oscard = _closure1_slot3;
        report = oscard.useCallback;
        tangon = _closure1_slot2;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    oscard = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 89; continue _fun00001 }
 10:
                    report = undefined;
                    if(!(oscard === report)) { _fun00002_ip = 18; continue _fun00001 }
 16:
                    oscard = false;
 18:
                    SaveGenerator(address=22);
 20:
                    return report;
 22:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 86; continue _fun00001 }
 28:
                    tangon = _closure1_slot0;
                    golfie = _closure1_slot1;
                    zuuluu = 4;
                    zuuluu = golfie[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.getGuildProfile;
                    zuuluu = _closure2_slot0;
                    zuuluu = tangon.bind(report)(zuuluu, oscard);
                    SaveGenerator(address=74);
 72:
                    return zuuluu;
 74:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 83; continue _fun00001 }
 80:
                    return zuuluu;
 83:
                    return zuuluu;
 86:
                    return michal;
 89:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(option)(zuuluu);
        zuuluu = new Array(1);
        zuuluu[0] = golfie;
        zuuluu = report.bind(oscard)(tangon, zuuluu);
        entity['fetchGuildProfile'] = zuuluu;
        entity['fetchStatus'] = michal;
        return entity;
    };
    zuuluu['useGuildProfile'] = michal;
    return entity;
})();