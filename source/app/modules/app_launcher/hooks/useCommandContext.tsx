// app/modules/app_launcher/hooks/useCommandContext.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    zuuluu = argFre;
    oscard = argPlu;
    tangon = function(argFoo) { // Original name: getCommandContext
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.type;
            entity = 'contextless';
            if(!(entity !== zuuluu)) { _fun00002_ip = 62; continue _fun00001 }
 18:
            entity = {};
            zuuluu = michal.channel;
            entity['channel'] = zuuluu;
            tangon = _closure1_slot1;
            zuuluu = tangon.getGuild;
            michal = michal.channel;
            michal = michal.guild_id;
            michal = zuuluu.bind(tangon)(michal);
            entity['guild'] = michal;
            _fun00002_ip = 77; continue _fun00001;
 62:
            michal = {};
            zuuluu = undefined;
            michal['channel'] = zuuluu;
            michal['guild'] = zuuluu;
            entity = michal;
 77:
            return entity;
        }
    };
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, report);
    entity = 0;
    golfie = oscard[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(golfie);
    var _closure1_slot0 = report;
    report = 1;
    golfie = oscard[report];
    report = argBaz;
    report = report.bind(entity)(golfie);
    var _closure1_slot1 = report;
    report = 2;
    oscard = oscard[report];
    report = argBar;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/app_launcher/hooks/useCommandContext.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getCommandContext'] = tangon;
    michal = function(argFoo) { // Original name: useCommandContext
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot0;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useCommandContext'] = michal;
    return entity;
})();