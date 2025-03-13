// app/actions/PruneGuildModalActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    golfie = oscard[entity];
    michal = argBaz;
    entity = undefined;
    michal = michal.bind(entity)(golfie);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.Endpoints;
    var _closure1_slot3 = michal;
    michal = {};
    golfie = function(argFoo) { // Original name: updateEstimate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = arguments[1];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00002_ip = 21; continue _fun00001 }
 18:
            zuuluu = 7;
 21:
            var _closure2_slot1 = zuuluu;
            zuuluu = arguments[2];
            var _closure2_slot2 = zuuluu;
            zuuluu = _closure1_slot2;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00004_ip = 145; continue _fun00003 }
 10:
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot1;
                        michal = 2;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        michal = tangon.bind(michal)(zuuluu);
                        tangon = michal.HTTP;
                        zuuluu = tangon.get;
                        michal = {};
                        option = _closure1_slot3;
                        golfie = option.GUILD_PRUNE;
                        report = _closure2_slot0;
                        report = golfie.bind(option)(report);
                        michal['url'] = report;
                        report = {};
                        golfie = _closure2_slot1;
                        report['days'] = golfie;
                        oscard = _closure2_slot2;
                        report['include_roles'] = oscard;
                        michal['query'] = report;
                        report = true;
                        michal['oldFormErrors'] = report;
                        report = false;
                        michal['rejectWithError'] = report;
                        michal = zuuluu.bind(tangon)(michal);
                        SaveGenerator(address=120);
 118:
                        return michal;
 120:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zuuluu) { _fun00004_ip = 142; continue _fun00003 }
 126:
                        zuuluu = michal.body;
                        zuuluu = zuuluu.pruned;
                        return zuuluu;
 142:
                        return michal;
 145:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    michal['updateEstimate'] = golfie;
    tangon = function(argFoo, argBar, argBaz) { // Original name: prune
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        oscard = _closure1_slot3;
        report = oscard.GUILD_PRUNE;
        tangon = argFoo;
        tangon = report.bind(oscard)(tangon);
        entity['url'] = tangon;
        report = {};
        tangon = argBar;
        report['days'] = tangon;
        tangon = false;
        report['compute_prune_count'] = tangon;
        oscard = argBaz;
        report['include_roles'] = oscard;
        entity['body'] = report;
        report = true;
        entity['oldFormErrors'] = report;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['prune'] = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/PruneGuildModalActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();