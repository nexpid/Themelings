// app/modules/search_v2/native/hooks/useSearchContext.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SearchTypes;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/search_v2/native/hooks/useSearchContext.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useGuildSearchContext
        report = argFoo;
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            entity = {};
            michal = _closure1_slot5;
            michal = michal.GUILD;
            entity['type'] = michal;
            michal = _closure2_slot0;
            entity['guildId'] = michal;
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useGuildSearchContext'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useGuildChannelSearchContext
        oscard = argFoo;
        report = argBar;
        var _closure2_slot0 = oscard;
        var _closure2_slot1 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            entity = {};
            michal = _closure1_slot5;
            michal = michal.GUILD_CHANNEL;
            entity['type'] = michal;
            zuuluu = _closure2_slot0;
            entity['guildId'] = zuuluu;
            michal = _closure2_slot1;
            entity['channelId'] = michal;
            return entity;
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useGuildChannelSearchContext'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useChannelDetailsSearchContext
        golfie = argFoo;
        oscard = argBar;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        option = report.bind(zuuluu)(tangon);
        report = option.useStateFromStores;
        zuuluu = _closure1_slot4;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot4;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00002_ip = 45; continue _fun00001 }
 35:
                michal = zuuluu.isThread;
                entity = michal.bind(zuuluu)();
 45:
                return entity;
            }
        };
        report = report.bind(option)(tangon, zuuluu);
        var _closure2_slot2 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(3);
        michal[0] = golfie;
        michal[1] = oscard;
        michal[2] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot2;
                if(entity) { _fun00004_ip = 89; continue _fun00003 }
 10:
                michal = _closure2_slot1;
                entity = null;
                if(!(entity != michal)) { _fun00004_ip = 57; continue _fun00003 }
 20:
                entity = {};
                michal = _closure1_slot5;
                michal = michal.GUILD_CHANNEL;
                entity['type'] = michal;
                michal = _closure2_slot1;
                entity['guildId'] = michal;
                michal = _closure2_slot0;
                entity['channelId'] = michal;
                _fun00004_ip = 87; continue _fun00003;
 57:
                michal = {};
                tangon = _closure1_slot5;
                tangon = tangon.CHANNEL;
                michal['type'] = tangon;
                tangon = _closure2_slot0;
                michal['channelId'] = tangon;
                entity = michal;
 87:
                _fun00004_ip = 167; continue _fun00003;
 89:
                tangon = _closure1_slot1;
                oscard = _closure1_slot2;
                michal = 4;
                michal = oscard[michal];
                option = undefined;
                golfie = tangon.bind(option)(michal);
                tangon = _closure2_slot1;
                michal = null;
                oscard = michal != tangon;
                michal = '[useChannelDetailsSearchContext] Thread must have a guild id';
                michal = golfie.bind(option)(oscard, michal);
                michal = {};
                report = _closure1_slot5;
                report = report.THREAD;
                michal['type'] = report;
                michal['guildId'] = tangon;
                zuuluu = _closure2_slot0;
                michal['channelId'] = zuuluu;
                entity = michal;
 167:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['useChannelDetailsSearchContext'] = michal;
    return entity;
})();