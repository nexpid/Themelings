// app/modules/guild_templates/useTrackCreateGuildViewed.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.GuildTemplateStates;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_templates/useTrackCreateGuildViewed.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useTrackCreateGuildViewed
        michal = argFoo;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot2;
        tangon = zuuluu.useRef;
        michal = new Array(0);
        michal = tangon.bind(zuuluu)(michal);
        var _closure2_slot1 = michal;
        michal = zuuluu.useEffect;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot0;
                michal = null;
                michal = michal != zuuluu;
                if(!michal) { _fun00002_ip = 42; continue _fun00001 }
 16:
                zuuluu = _closure2_slot0;
                tangon = zuuluu.state;
                zuuluu = _closure1_slot3;
                zuuluu = zuuluu.RESOLVING;
                michal = tangon !== zuuluu;
 42:
                if(!michal) { _fun00002_ip = 196; continue _fun00001 }
 48:
                michal = _closure2_slot1;
                tangon = michal.current;
                zuuluu = tangon.includes;
                michal = _closure2_slot0;
                michal = michal.code;
                michal = zuuluu.bind(tangon)(michal);
                if(michal) { _fun00002_ip = 196; continue _fun00001 }
 79:
                michal = _closure2_slot1;
                zuuluu = michal.current;
                michal = zuuluu.push;
                report = _closure2_slot0;
                entity = report.code;
                entity = michal.bind(zuuluu)(entity);
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 3;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.track;
                entity = _closure1_slot4;
                michal = entity.CREATE_GUILD_VIEWED;
                entity = {};
                oscard = report.code;
                entity['guild_template_code'] = oscard;
                oscard = report.name;
                entity['guild_template_name'] = oscard;
                oscard = report.description;
                entity['guild_template_description'] = oscard;
                report = report.sourceGuildId;
                entity['guild_template_guild_id'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
 196:
                entity = undefined;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();