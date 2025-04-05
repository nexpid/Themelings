// app/modules/application_commands/ApplicationCommandStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
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
            _closure1_slot11 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    romeon = function() { // Original name: handleInit
        entity = {};
        _closure1_slot10 = entity;
        entity = true;
        return entity;
    };
    entity = function(argFoo) { // Original name: getOrCreateChannelState
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot10;
            zuuluu = michal in zuuluu;
            if(zuuluu) { _fun00004_ip = 55; continue _fun00003 }
 17:
            tangon = _closure1_slot10;
            zuuluu = {'activeCommand': null, 'activeCommandSection': null, 'activeOptionName': null, 'preferredCommandId': null, 'optionStates': null, 'initialValues': null, 'commandOrigin': null};
            report = {};
            zuuluu['optionStates'] = report;
            report = {};
            zuuluu['initialValues'] = report;
            tangon[michal] = zuuluu;
 55:
            entity = _closure1_slot10;
            entity = entity[michal];
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    yankee = function(argFoo) { // Original name: handleSetActiveCommand
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            foxtra = entity.channelId;
            yankee = entity.command;
            sizing = entity.section;
            romeon = entity.initialValues;
            offset = entity.location;
            verify = entity.triggerSection;
            option = entity.queryLength;
            golfie = entity.sectionName;
            oscard = entity.query;
            report = entity.searchResultsPosition;
            tangon = entity.source;
            kiloes = entity.commandOrigin;
            zuuluu = undefined;
            var _closure2_slot0 = zuuluu;
            michal = _closure1_slot12;
            foxtra = michal.bind(zuuluu)(foxtra);
            michal = null;
            output = michal == yankee;
            result = undefined;
            if(output) { _fun00006_ip = 106; continue _fun00005 }
 101:
            result = yankee.id;
 106:
            echoed = foxtra.activeCommand;
            update = michal == echoed;
            output = undefined;
            if(update) { _fun00006_ip = 126; continue _fun00005 }
 121:
            output = echoed.id;
 126:
            if(!(result !== output)) { _fun00006_ip = 321; continue _fun00005 }
 133:
            foxtra['activeCommand'] = yankee;
            foxtra['activeCommandSection'] = sizing;
            foxtra['activeOptionName'] = michal;
            foxtra['preferredCommandId'] = michal;
            if(!(michal == romeon)) { _fun00006_ip = 163; continue _fun00005 }
 161:
            romeon = {};
 163:
            foxtra['initialValues'] = romeon;
            sizing = michal != kiloes;
            romeon = null;
            if(!sizing) { _fun00006_ip = 181; continue _fun00005 }
 178:
            romeon = kiloes;
 181:
            foxtra['commandOrigin'] = romeon;
            foxtra['source'] = tangon;
            romeon = {};
            _closure2_slot0 = romeon;
            sizing = michal == yankee;
            kiloes = undefined;
            if(sizing) { _fun00006_ip = 213; continue _fun00005 }
 208:
            kiloes = yankee.options;
 213:
            if(!(michal != kiloes)) { _fun00006_ip = 237; continue _fun00005 }
 217:
            sizing = yankee.options;
            kiloes = sizing.forEach;
            backup = function(argFoo) {
                zuuluu = _closure2_slot0;
                entity = argFoo;
                michal = entity.name;
                entity = {'isActive': false, 'hasValue': false, 'lastValidationResult': null, 'optionValue': null};
                zuuluu[michal] = entity;
                entity = undefined;
                return entity;
            };
            backup = kiloes.bind(sizing)(backup);
 237:
            foxtra['optionStates'] = romeon;
            if(!(michal != yankee)) { _fun00006_ip = 317; continue _fun00005 }
 247:
            michal = _closure1_slot0;
            romeon = _closure1_slot1;
            entity = 8;
            entity = romeon[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.trackCommandSelected;
            entity = {};
            entity['command'] = yankee;
            entity['location'] = offset;
            entity['triggerSection'] = verify;
            entity['queryLength'] = option;
            entity['sectionName'] = golfie;
            entity['query'] = oscard;
            entity['searchResultsPosition'] = report;
            entity['source'] = tangon;
            entity = michal.bind(zuuluu)(entity);
 317:
            entity = true;
            return entity;
 321:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot13 = yankee;
    offset = function(argFoo) { // Original name: handleSetPreferredCommand
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            michal = entity.commandId;
            entity = _closure1_slot12;
            oscard = undefined;
            zuuluu = entity.bind(oscard)(zuuluu);
            entity = zuuluu.preferredCommandId;
            entity = michal !== entity;
            if(!entity) { _fun00008_ip = 95; continue _fun00007 }
 41:
            tangon = zuuluu.preferredCommandId;
            report = null;
            tangon = report !== tangon;
            if(tangon) { _fun00008_ip = 92; continue _fun00007 }
 56:
            golfie = zuuluu.activeCommand;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00008_ip = 76; continue _fun00007 }
 71:
            oscard = golfie.id;
 76:
            golfie = report != oscard;
            report = null;
            if(!golfie) { _fun00008_ip = 88; continue _fun00007 }
 85:
            report = oscard;
 88:
            tangon = michal !== report;
 92:
            entity = tangon;
 95:
            if(!entity) { _fun00008_ip = 128; continue _fun00007 }
 98:
            tangon = null;
            zuuluu['activeCommand'] = tangon;
            zuuluu['activeOptionName'] = tangon;
            zuuluu['preferredCommandId'] = michal;
            michal = {};
            zuuluu['optionStates'] = michal;
            entity = true;
 128:
            return entity;
        }
    };
    var _closure1_slot14 = offset;
    verify = function(argFoo) { // Original name: handleUpdateOptionStates
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            michal = entity.channelId;
            report = entity.changedOptionStates;
            entity = _closure1_slot12;
            sizing = undefined;
            zuuluu = entity.bind(sizing)(michal);
            michal = {};
            status = zuuluu.optionStates;
            sierra = michal;
            entity = copyDataProperties(sierra, status);
            entity = global;
            tangon = entity.Object;
            entity = tangon.entries;
            kiloes = entity.bind(tangon)(report);
            entity = kiloes.length;
            backup = 0;
            tangon = backup < entity;
            foxtra = false;
            romeon = null;
            entity = true;
            yankee = 2;
            offset = 1;
            verify = 0;
            option = undefined;
            golfie = undefined;
            oscard = undefined;
            report = undefined;
            if(!tangon) { _fun00010_ip = 581; continue _fun00009 }
 101:
            result = kiloes[verify];
            tangon = _closure1_slot7;
            tangon = tangon.bind(sizing)(result, yankee);
            config = tangon[backup];
            record = tangon[offset];
            tangon = zuuluu.optionStates;
            tangon = config in tangon;
            source = option;
            update = golfie;
            echoed = oscard;
            result = report;
            if(!tangon) { _fun00010_ip = 554; continue _fun00009 }
 151:
            tangon = record.hasValue;
            if(!(sizing === tangon)) { _fun00010_ip = 173; continue _fun00009 }
 161:
            tangon = michal[config];
            tangon = tangon.hasValue;
            _fun00010_ip = 179; continue _fun00009;
 173:
            tangon = record.hasValue;
 179:
            if(tangon) { _fun00010_ip = 256; continue _fun00009 }
 182:
            tangon = {'hasValue': false, 'isActive': false, 'lastValidationResult': null, 'optionValue': null};
            tangon['location'] = sizing;
            tangon['length'] = sizing;
            michal[config] = tangon;
            tangon = zuuluu.activeOptionName;
            source = option;
            update = golfie;
            echoed = oscard;
            result = report;
            if(!(tangon === config)) { _fun00010_ip = 554; continue _fun00009 }
 233:
            zuuluu['activeOptionName'] = romeon;
            source = option;
            update = golfie;
            echoed = oscard;
            result = report;
            _fun00010_ip = 554; continue _fun00009;
 256:
            tangon = michal[config];
            cntext = {};
            cntext['hasValue'] = entity;
            ctrled = record.isActive;
            if(!(sizing === ctrled)) { _fun00010_ip = 285; continue _fun00009 }
 277:
            ctrled = tangon.isActive;
            _fun00010_ip = 291; continue _fun00009;
 285:
            ctrled = record.isActive;
 291:
            cntext['isActive'] = ctrled;
            ctrled = record.lastValidationResult;
            if(!(sizing === ctrled)) { _fun00010_ip = 314; continue _fun00009 }
 306:
            ctrled = tangon.lastValidationResult;
            _fun00010_ip = 320; continue _fun00009;
 314:
            ctrled = record.lastValidationResult;
 320:
            cntext['lastValidationResult'] = ctrled;
            sequen = record.optionValue;
            ctrled = sequen;
            if(!(romeon == sequen)) { _fun00010_ip = 344; continue _fun00009 }
 338:
            ctrled = tangon.optionValue;
 344:
            cntext['optionValue'] = ctrled;
            vacuum = record.location;
            ctrled = vacuum;
            if(!(romeon == vacuum)) { _fun00010_ip = 366; continue _fun00009 }
 361:
            ctrled = tangon.location;
 366:
            cntext['location'] = ctrled;
            ctrled = record.length;
            papara = ctrled;
            if(!(romeon == ctrled)) { _fun00010_ip = 387; continue _fun00009 }
 382:
            papara = tangon.length;
 387:
            cntext['length'] = papara;
            michal[config] = cntext;
            cntext = record.isActive;
            source = sequen;
            update = vacuum;
            echoed = ctrled;
            result = tangon;
            if(!(sizing !== cntext)) { _fun00010_ip = 554; continue _fun00009 }
 420:
            cntext = record.isActive;
            record = zuuluu.activeOptionName;
            if(cntext) { _fun00010_ip = 471; continue _fun00009 }
 435:
            source = sequen;
            update = vacuum;
            echoed = ctrled;
            result = tangon;
            if(!(config === record)) { _fun00010_ip = 554; continue _fun00009 }
 451:
            zuuluu['activeOptionName'] = romeon;
            source = sequen;
            update = vacuum;
            echoed = ctrled;
            result = tangon;
            _fun00010_ip = 554; continue _fun00009;
 471:
            record = romeon != record;
            if(!record) { _fun00010_ip = 488; continue _fun00009 }
 478:
            cntext = zuuluu.activeOptionName;
            record = cntext !== config;
 488:
            if(!record) { _fun00010_ip = 536; continue _fun00009 }
 491:
            cntext = zuuluu.activeOptionName;
            record = {};
            papara = zuuluu.activeOptionName;
            status = michal[papara];
            sierra = record;
            papara = copyDataProperties(sierra, status);
            michal[cntext] = record;
            record = zuuluu.activeOptionName;
            record = michal[record];
            record['isActive'] = foxtra;
 536:
            zuuluu['activeOptionName'] = config;
            source = sequen;
            update = vacuum;
            echoed = ctrled;
            result = tangon;
 554:
            verify = verify + 1;
            tangon = kiloes.length;
            option = source;
            golfie = update;
            oscard = echoed;
            report = result;
            if(verify < tangon) { _fun00010_ip = 101; continue _fun00009 }
 581:
            zuuluu['optionStates'] = michal;
            return entity;
        }
    };
    var _closure1_slot15 = verify;
    entity = global;
    foxtra = entity.Object;
    option = foxtra.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(foxtra)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 4;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 5;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 6;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = {};
    var _closure1_slot10 = michal;
    michal = 9;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: ApplicationCommandStore
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot11;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00012_ip = 69; continue _fun00011 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00012_ip = 105; continue _fun00011;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
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
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = _closure1_slot8;
            michal = zuuluu.addChangeListener;
            entity = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure1_slot9;
                    entity = zuuluu.getChannelId;
                    report = entity.bind(zuuluu)();
                    entity = null;
                    if(!(entity != report)) { _fun00014_ip = 98; continue _fun00013 }
 23:
                    tangon = _closure1_slot8;
                    zuuluu = tangon.getCurrentSidebarChannelId;
                    zuuluu = zuuluu.bind(tangon)(report);
                    if(!(entity != zuuluu)) { _fun00014_ip = 53; continue _fun00013 }
 42:
                    entity = _closure1_slot10;
                    entity = zuuluu in entity;
                    if(entity) { _fun00014_ip = 94; continue _fun00013 }
 53:
                    entity = _closure1_slot10;
                    entity = report in entity;
                    if(entity) { _fun00014_ip = 68; continue _fun00013 }
 64:
                    entity = {};
                    _fun00014_ip = 86; continue _fun00013;
 68:
                    zuuluu = {};
                    tangon = _closure1_slot10;
                    tangon = tangon[report];
                    zuuluu[report] = tangon;
                    entity = zuuluu;
 86:
                    _closure1_slot10 = entity;
                    entity = undefined;
                    return entity;
 94:
                    entity = false;
                    return entity;
 98:
                    entity = {};
                    _closure1_slot10 = entity;
                    entity = true;
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(12);
        entity[0] = report;
        report = {};
        golfie = 'getActiveCommand';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot12;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.activeCommand;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getActiveCommandSection';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot12;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.activeCommandSection;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getActiveOptionName';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot12;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.activeOptionName;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getActiveOption';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = _closure1_slot12;
                oscard = undefined;
                entity = argFoo;
                entity = michal.bind(oscard)(entity);
                var _closure3_slot0 = entity;
                tangon = entity.activeCommand;
                entity = null;
                report = entity == tangon;
                michal = undefined;
                if(report) { _fun00016_ip = 69; continue _fun00015 }
 40:
                report = tangon.options;
                tangon = entity == report;
                michal = undefined;
                if(tangon) { _fun00016_ip = 69; continue _fun00015 }
 54:
                tangon = report.find;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    michal = entity.name;
                    entity = _closure3_slot0;
                    entity = entity.activeOptionName;
                    entity = michal === entity;
                    return entity;
                };
                michal = tangon.bind(report)(zuuluu);
 69:
                zuuluu = entity != michal;
                entity = null;
                if(!zuuluu) { _fun00016_ip = 81; continue _fun00015 }
 78:
                entity = michal;
 81:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getPreferredCommandId';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot12;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.preferredCommandId;
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getOptionStates';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot12;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.optionStates;
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getOptionState';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            zuuluu = _closure1_slot12;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            michal = entity.optionStates;
            entity = argBar;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getCommandOrigin';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot12;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.commandOrigin;
            return entity;
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'getSource';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot12;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = entity.source;
            return entity;
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'getOption';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argBar;
                var _closure3_slot0 = entity;
                zuuluu = _closure1_slot12;
                report = undefined;
                entity = argFoo;
                entity = zuuluu.bind(report)(entity);
                tangon = entity.activeCommand;
                zuuluu = null;
                oscard = zuuluu == tangon;
                entity = undefined;
                if(oscard) { _fun00018_ip = 72; continue _fun00017 }
 43:
                tangon = tangon.options;
                zuuluu = zuuluu == tangon;
                entity = undefined;
                if(zuuluu) { _fun00018_ip = 72; continue _fun00017 }
 57:
                zuuluu = tangon.find;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.name;
                    entity = _closure3_slot0;
                    entity = michal === entity;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal);
 72:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            entity = {};
            tangon = _closure1_slot12;
            zuuluu = undefined;
            michal = argFoo;
            report = tangon.bind(zuuluu)(michal);
            oscard = entity;
            michal = copyDataProperties(oscard, report);
            return entity;
        };
        report['value'] = oscard;
        entity[11] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'ApplicationCommandStore';
    option['displayName'] = michal;
    michal = 10;
    michal = oscard[michal];
    sizing = golfie.bind(entity)(michal);
    michal = {};
    michal['CONNECTION_OPEN'] = romeon;
    michal['CHANNEL_SELECT'] = romeon;
    michal['LOGOUT'] = romeon;
    michal['APPLICATION_COMMAND_SET_ACTIVE_COMMAND'] = yankee;
    michal['APPLICATION_COMMAND_SET_PREFERRED_COMMAND'] = offset;
    michal['APPLICATION_COMMAND_UPDATE_OPTIONS'] = verify;
    tangon = function(argFoo) { // Original name: handleUpdateChannelState
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            golfie = entity.channelId;
            option = entity.preferredCommandId;
            verify = entity.command;
            report = entity.section;
            tangon = entity.location;
            oscard = entity.changedOptionStates;
            michal = _closure1_slot13;
            entity = {};
            offset = 'APPLICATION_COMMAND_SET_ACTIVE_COMMAND';
            entity['type'] = offset;
            entity['channelId'] = golfie;
            entity['command'] = verify;
            entity['section'] = report;
            entity['location'] = tangon;
            report = undefined;
            entity = michal.bind(report)(entity);
            tangon = _closure1_slot14;
            michal = {};
            verify = 'APPLICATION_COMMAND_SET_PREFERRED_COMMAND';
            michal['type'] = verify;
            michal['channelId'] = golfie;
            michal['commandId'] = option;
            michal = tangon.bind(report)(michal);
            tangon = _closure1_slot15;
            zuuluu = {};
            option = 'APPLICATION_COMMAND_UPDATE_OPTIONS';
            zuuluu['type'] = option;
            zuuluu['channelId'] = golfie;
            zuuluu['changedOptionStates'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            if(entity) { _fun00020_ip = 143; continue _fun00019 }
 140:
            entity = michal;
 143:
            if(entity) { _fun00020_ip = 148; continue _fun00019 }
 146:
            entity = true;
 148:
            return entity;
        }
    };
    michal['APPLICATION_COMMAND_UPDATE_CHANNEL_STATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    output = tangon;
    kiloes = michal;
    michal = new output[option](sizing, kiloes, backup);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/application_commands/ApplicationCommandStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();