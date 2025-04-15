// app/modules/guild_onboarding_home/getNextResourceChannel.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
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
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_onboarding_home/getNextResourceChannel.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar) { // Original name: getCurrentAndNextResourceChannel
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argBar;
            var _closure2_slot0 = michal;
            tangon = _closure1_slot2;
            zuuluu = tangon.getResourceChannels;
            michal = argFoo;
            zuuluu = zuuluu.bind(tangon)(michal);
            michal = zuuluu.findIndex;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.channelId;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            tangon = michal.bind(zuuluu)(entity);
            entity = 0;
            if(!(!(tangon < entity))) { _fun00002_ip = 92; continue _fun00001 }
 54:
            michal = zuuluu[tangon];
            entity = new Array(2);
            entity[0] = michal;
            michal = 1;
            tangon = tangon + michal;
            michal = zuuluu.length;
            michal = tangon % michal;
            michal = zuuluu[michal];
            entity[1] = michal;
            _fun00002_ip = 100; continue _fun00001;
 92:
            entity = [null, null];
 100:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar) { // Original name: usePreviousAndNextResourceChannel
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = argBar;
            var _closure2_slot1 = michal;
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            tangon = 1;
            report = zuuluu[tangon];
            zuuluu = undefined;
            oscard = oscard.bind(zuuluu)(report);
            report = oscard.useStateFromStores;
            michal = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getResourceChannels;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            zuuluu = report.bind(oscard)(zuuluu, michal);
            michal = zuuluu.findIndex;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.channelId;
                entity = _closure2_slot1;
                entity = michal === entity;
                return entity;
            };
            michal = michal.bind(zuuluu)(entity);
            entity = 0;
            if(!(!(michal < entity))) { _fun00004_ip = 191; continue _fun00003 }
 95:
            entity = zuuluu.length;
            if(!(!(entity <= tangon))) { _fun00004_ip = 191; continue _fun00003 }
 104:
            report = zuuluu.length;
            entity = 2;
            if(!(entity !== report)) { _fun00004_ip = 164; continue _fun00003 }
 116:
            report = michal - tangon;
            entity = zuuluu.length;
            entity = report % entity;
            report = zuuluu[entity];
            entity = new Array(2);
            entity[0] = report;
            oscard = michal + tangon;
            report = zuuluu.length;
            report = oscard % report;
            report = zuuluu[report];
            entity[1] = report;
            _fun00004_ip = 189; continue _fun00003;
 164:
            michal = tangon - michal;
            zuuluu = zuuluu[michal];
            michal = [null];
            michal[1] = zuuluu;
            entity = michal;
 189:
            _fun00004_ip = 199; continue _fun00003;
 191:
            entity = [null, null];
 199:
            return entity;
        }
    };
    zuuluu['usePreviousAndNextResourceChannel'] = michal;
    return entity;
})();