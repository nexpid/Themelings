// app/records/AppliedGuildBoostRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot5 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    michal = function(argFoo) {
        report = function(argFoo) { // Original name: AppliedGuildBoostRecord
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                report = this;
                entity = _closure1_slot0;
                michal = _closure2_slot0;
                tangon = undefined;
                entity = entity.bind(tangon)(report, michal);
                entity = _closure1_slot3;
                offset = entity.bind(tangon)(michal);
                michal = _closure1_slot2;
                entity = _closure1_slot5;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 65; continue _fun00003 }
 52:
                entity = offset.apply;
                entity = entity.bind(offset)(report, tangon);
                _fun00004_ip = 103; continue _fun00003;
 65:
                golfie = global;
                verify = golfie.Reflect;
                option = verify.construct;
                oscard = _closure1_slot3;
                oscard = oscard.bind(tangon)(report);
                golfie = oscard.constructor;
                oscard = new Array(0);
                entity = option.bind(verify)(offset, oscard, golfie);
 103:
                entity = michal.bind(tangon)(report, entity);
                michal = zuuluu.id;
                entity['id'] = michal;
                michal = zuuluu.guildId;
                entity['guildId'] = michal;
                michal = zuuluu.userId;
                entity['userId'] = michal;
                michal = zuuluu.user;
                entity['user'] = michal;
                michal = zuuluu.ended;
                entity['ended'] = michal;
                tangon = zuuluu.endsAt;
                michal = null;
                tangon = michal != tangon;
                if(!tangon) { _fun00004_ip = 186; continue _fun00003 }
 180:
                michal = zuuluu.endsAt;
 186:
                entity['endsAt'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = report;
        oscard = _closure1_slot4;
        tangon = undefined;
        zuuluu = argFoo;
        zuuluu = oscard.bind(tangon)(report, zuuluu);
        zuuluu = _closure1_slot1;
        entity = {};
        oscard = 'createFromServer';
        entity['key'] = oscard;
        michal = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = argFoo;
                zuuluu = _closure2_slot0;
                entity = {};
                michal = tangon.id;
                entity['id'] = michal;
                michal = tangon.guild_id;
                entity['guildId'] = michal;
                michal = tangon.user;
                golfie = null;
                if(!(golfie == michal)) { _fun00006_ip = 49; continue _fun00005 }
 41:
                michal = tangon.user_id;
                _fun00006_ip = 59; continue _fun00005;
 49:
                report = tangon.user;
                michal = report.id;
 59:
                entity['userId'] = michal;
                michal = tangon.user;
                entity['user'] = michal;
                michal = tangon.ended;
                entity['ended'] = michal;
                michal = tangon.ends_at;
                report = golfie != michal;
                michal = null;
                if(!report) { _fun00006_ip = 148; continue _fun00005 }
 98:
                oscard = tangon.ends_at;
                report = '';
                michal = null;
                if(!(report !== oscard)) { _fun00006_ip = 148; continue _fun00005 }
 114:
                report = global;
                oscard = report.Date;
                option = tangon.ends_at;
                report = oscard.prototype;
                report = Object.create(report, {constructor: {value: oscard}});
                verify = report;
                tangon = new verify[oscard](option, golfie);
                michal = tangon instanceof Object ? tangon : report;
 148:
                entity['endsAt'] = michal;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                verify = michal;
                option = entity;
                entity = new verify[zuuluu](option, golfie);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = null;
        entity = zuuluu.bind(tangon)(report, entity, michal);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 6;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'records/AppliedGuildBoostRecord.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();