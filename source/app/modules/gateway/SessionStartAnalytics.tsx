// app/modules/gateway/SessionStartAnalytics.tsx
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
        zuuluu = function() { // Original name: SessionStartAnalytics
            zuuluu = this;
            tangon = _closure1_slot0;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = new Array(0);
            zuuluu['headlessTasks'] = michal;
            michal = null;
            zuuluu['latestHeadlessTaskRunOn'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'recordStartHeadlessTask';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = this;
                entity = michal.headlessTasks;
                zuuluu = entity.length;
                entity = 5;
                if(!(zuuluu >= entity)) { _fun00002_ip = 37; continue _fun00001 }
 21:
                zuuluu = michal.headlessTasks;
                entity = zuuluu.shift;
                entity = entity.bind(zuuluu)();
 37:
                tangon = michal.headlessTasks;
                zuuluu = tangon.push;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity);
                entity = global;
                zuuluu = entity.Date;
                entity = zuuluu.now;
                entity = entity.bind(zuuluu)();
                michal['latestHeadlessTaskRunOn'] = entity;
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(4);
        michal[0] = entity;
        entity = {};
        oscard = 'getLatestTaskRunOn';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.latestHeadlessTaskRunOn;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'getHeadlessTasks';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity.headlessTasks;
            return entity;
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'clear';
        entity['key'] = oscard;
        report = function() { // Original name: value
            michal = this;
            entity = new Array(0);
            michal['headlessTasks'] = entity;
            entity = null;
            michal['latestHeadlessTaskRunOn'] = entity;
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        michal[3] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    romeon = tangon;
    michal = new romeon[michal](yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/SessionStartAnalytics.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();