// app/modules/dismissible_content/TaskRunner.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot0 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot1 = tangon;
    michal = function() {
        tangon = _closure1_slot1;
        zuuluu = function() { // Original name: TaskRunner
            zuuluu = this;
            tangon = _closure1_slot0;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = null;
            zuuluu['timeoutId'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'schedule';
        entity['key'] = michal;
        michal = function(argFoo, argBar) { // Original name: value
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            entity = argFoo;
            var _closure3_slot1 = entity;
            entity = zuuluu.unschedule;
            entity = entity.bind(zuuluu)();
            entity = global;
            report = entity.setTimeout;
            entity = undefined;
            tangon = function() {
                zuuluu = _closure3_slot0;
                michal = null;
                zuuluu['timeoutId'] = michal;
                michal = _closure3_slot1;
                entity = undefined;
                michal = michal.bind(entity)();
                return entity;
            };
            michal = argBar;
            michal = report.bind(entity)(tangon, michal);
            zuuluu['timeoutId'] = michal;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'unschedule';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = this;
                entity = michal.scheduled;
                entity = entity.bind(michal)();
                if(!entity) { _fun00002_ip = 45; continue _fun00001 }
 16:
                entity = global;
                tangon = entity.clearTimeout;
                zuuluu = michal.timeoutId;
                entity = undefined;
                entity = tangon.bind(entity)(zuuluu);
                entity = null;
                michal['timeoutId'] = entity;
 45:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'scheduled';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            michal = entity.timeoutId;
            entity = null;
            entity = entity !== michal;
            return entity;
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/dismissible_content/TaskRunner.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['TaskRunner'] = michal;
    return entity;
})();