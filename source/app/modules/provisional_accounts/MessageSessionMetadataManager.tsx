// app/modules/provisional_accounts/MessageSessionMetadataManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
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
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: MessageSessionMetadataManager
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                report = this;
                foxtra = 0;
                entity = copyRestArgs(foxtra);
                option = _closure1_slot2;
                michal = _closure2_slot0;
                tangon = undefined;
                option = option.bind(tangon)(report, michal);
                offset = new Array(0);
                foxtra = offset;
                romeon = entity;
                yankee = 0;
                entity = arraySpread(foxtra, romeon, yankee);
                entity = _closure1_slot5;
                verify = entity.bind(tangon)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot8;
                entity = entity.bind(tangon)();
                if(entity) { _fun00004_ip = 86; continue _fun00003 }
 73:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00004_ip = 120; continue _fun00003;
 86:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 120:
                entity = michal.bind(tangon)(report, entity);
                var _closure3_slot0 = entity;
                michal = {};
                tangon = function(argFoo) { // Original name: MESSAGE_CREATE
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleMessageCreate;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal['MESSAGE_CREATE'] = tangon;
                zuuluu = function(argFoo) { // Original name: MESSAGE_UPDATE
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleMessageUpdate;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                michal['MESSAGE_UPDATE'] = zuuluu;
                entity['actions'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'handleMessageCreate';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            zuuluu = this;
            entity = argFoo;
            michal = entity.message;
            entity = zuuluu._trackIfSessionMetadataExists;
            entity = entity.bind(zuuluu)(michal);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'handleMessageUpdate';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = this;
            entity = argFoo;
            michal = entity.message;
            entity = zuuluu._trackIfSessionMetadataExists;
            entity = entity.bind(zuuluu)(michal);
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = '_getAuthorizedApplicationIds';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
 3: // try_start_0
                entity = entity.authorized_application_ids;
 9: // try_end0
                return entity;
 11: // catch_target0
                CatchBlockStart(arg_register=0);
                entity = null;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = '_trackIfSessionMetadataExists';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                report = argFoo;
                golfie = this;
                entity = report.session_metadata;
                verify = null;
                if(!(verify != entity)) { _fun00008_ip = 132; continue _fun00007 }
 18:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot1;
                michal = 6;
                michal = tangon[michal];
                oscard = undefined;
                tangon = zuuluu.bind(oscard)(michal);
                zuuluu = tangon.track;
                entity = _closure1_slot7;
                michal = entity.MESSAGE_DISPATCH_SESSION_METADATA_FOUND;
                entity = {};
                option = report.id;
                entity['message_id'] = option;
                option = report.channel_id;
                entity['channel_id'] = option;
                option = report.author;
                verify = verify == option;
                if(verify) { _fun00008_ip = 97; continue _fun00007 }
 92:
                oscard = option.id;
 97:
                entity['author_id'] = oscard;
                oscard = golfie._getAuthorizedApplicationIds;
                report = report.session_metadata;
                report = oscard.bind(golfie)(report);
                entity['authorized_application_ids'] = report;
                entity = zuuluu.bind(tangon)(michal, entity);
 132:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/provisional_accounts/MessageSessionMetadataManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();