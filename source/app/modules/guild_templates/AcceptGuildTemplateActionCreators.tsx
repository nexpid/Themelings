// app/modules/guild_templates/AcceptGuildTemplateActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.Endpoints;
    var _closure1_slot5 = michal;
    michal = {};
    tangon = function(argFoo, argBar, argBaz) { // Original name: acceptGuildTemplate
        report = argFoo;
        var _closure2_slot0 = report;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.dispatch;
        michal = {};
        oscard = 'GUILD_TEMPLATE_ACCEPT';
        michal['type'] = oscard;
        michal['code'] = report;
        michal = zuuluu.bind(tangon)(michal);
        michal = global;
        zuuluu = michal.Promise;
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        golfie = function(argFoo, argBar) {
            entity = argFoo;
            var _closure3_slot0 = entity;
            entity = argBar;
            var _closure3_slot1 = entity;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            report = zuuluu.HTTP;
            tangon = report.post;
            zuuluu = {};
            verify = _closure1_slot5;
            option = verify.UNRESOLVED_GUILD_TEMPLATE;
            oscard = _closure2_slot0;
            oscard = option.bind(verify)(oscard);
            zuuluu['url'] = oscard;
            oscard = {};
            option = _closure2_slot1;
            oscard['name'] = option;
            golfie = _closure2_slot2;
            oscard['icon'] = golfie;
            zuuluu['body'] = oscard;
            oscard = true;
            zuuluu['oldFormErrors'] = oscard;
            oscard = false;
            zuuluu['rejectWithError'] = oscard;
            report = tangon.bind(report)(zuuluu);
            tangon = report.then;
            zuuluu = function(argFoo) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    entity = argFoo;
                    report = entity.body;
                    var _closure4_slot0 = report;
                    oscard = _closure1_slot1;
                    tangon = _closure1_slot2;
                    entity = 3;
                    tangon = tangon[entity];
                    entity = undefined;
                    golfie = oscard.bind(entity)(tangon);
                    oscard = golfie.dispatch;
                    tangon = {};
                    option = 'GUILD_TEMPLATE_ACCEPT_SUCCESS';
                    tangon['type'] = option;
                    option = _closure2_slot0;
                    tangon['code'] = option;
                    tangon['guild'] = report;
                    tangon = oscard.bind(golfie)(tangon);
                    oscard = _closure1_slot3;
                    tangon = oscard.isConnected;
                    tangon = tangon.bind(oscard)();
                    if(tangon) { _fun00002_ip = 143; continue _fun00001 }
 93:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 5;
                    tangon = golfie[tangon];
                    golfie = oscard.bind(entity)(tangon);
                    oscard = golfie.transitionToGuild;
                    tangon = report.id;
                    tangon = oscard.bind(golfie)(tangon);
                    tangon = _closure3_slot0;
                    tangon = tangon.bind(entity)(report);
                    _fun00002_ip = 165; continue _fun00001;
 143:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.addConditionalChangeListener;
                    michal = function() {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            report = _closure1_slot4;
                            tangon = report.getGuild;
                            zuuluu = _closure4_slot0;
                            zuuluu = zuuluu.id;
                            tangon = tangon.bind(report)(zuuluu);
                            zuuluu = null;
                            if(!(zuuluu == tangon)) { _fun00004_ip = 39; continue _fun00003 }
 35:
                            zuuluu = undefined;
                            return zuuluu;
 39:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            michal = 5;
                            michal = zuuluu[michal];
                            zuuluu = undefined;
                            report = tangon.bind(zuuluu)(michal);
                            tangon = report.transitionToGuild;
                            michal = _closure4_slot0;
                            entity = michal.id;
                            entity = tangon.bind(report)(entity);
                            entity = _closure3_slot0;
                            entity = entity.bind(zuuluu)(michal);
                            entity = false;
                            return entity;
                        }
                    };
                    michal = zuuluu.bind(tangon)(michal);
 165:
                    return entity;
                }
            };
            michal = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 3;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'GUILD_TEMPLATE_ACCEPT_FAILURE';
                michal['type'] = report;
                report = _closure2_slot0;
                michal['code'] = report;
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = _closure3_slot1;
                michal = argFoo;
                michal = michal.body;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        option = michal;
        entity = new option[zuuluu](golfie, oscard);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    michal['acceptGuildTemplate'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_templates/AcceptGuildTemplateActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();