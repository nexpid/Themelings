// app/uikit-native/ChatInputParser.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = tangon;
    var _closure1_slot1 = verify;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, michal);
    romeon = 0;
    michal = verify[romeon];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot2 = michal;
    yankee = 1;
    michal = verify[yankee];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    offset = 2;
    michal = verify[offset];
    michal = option.bind(entity)(michal);
    michal = michal.processColor;
    var _closure1_slot4 = michal;
    tangon = {};
    tangon['COMMAND_OPTION'] = romeon;
    golfie = 'COMMAND_OPTION';
    tangon[romeon] = golfie;
    tangon['ROLE_HIGHLIGHT'] = yankee;
    oscard = 'ROLE_HIGHLIGHT';
    tangon[yankee] = oscard;
    michal = {};
    michal['COMMAND_OPTION'] = romeon;
    michal[romeon] = golfie;
    michal['COMMAND_OPTION_WITH_VALUE'] = yankee;
    golfie = 'COMMAND_OPTION_WITH_VALUE';
    michal[yankee] = golfie;
    michal['EMOJI_HIGHLIGHT'] = offset;
    golfie = 'EMOJI_HIGHLIGHT';
    michal[offset] = golfie;
    offset = 3;
    michal['USER_HIGHLIGHT'] = offset;
    golfie = 'USER_HIGHLIGHT';
    michal[offset] = golfie;
    golfie = 4;
    michal['ROLE_HIGHLIGHT'] = golfie;
    michal[golfie] = oscard;
    offset = 5;
    michal['CHANNEL_HIGHLIGHT'] = offset;
    oscard = 'CHANNEL_HIGHLIGHT';
    michal[offset] = oscard;
    offset = 6;
    michal['SILENT_HIGHLIGHT'] = offset;
    oscard = 'SILENT_HIGHLIGHT';
    michal[offset] = oscard;
    oscard = function() {
        tangon = _closure1_slot3;
        zuuluu = function() { // Original name: ChatInputParser
            zuuluu = this;
            tangon = _closure1_slot2;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = {};
            zuuluu['rules'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'addRule';
        entity['key'] = michal;
        michal = function(argFoo) { // Original name: value
            zuuluu = argFoo;
            entity = this;
            michal = entity.rules;
            entity = zuuluu.ruleId;
            michal[entity] = zuuluu;
            entity = undefined;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'removeRule';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            entity = this;
            michal = entity.rules;
            entity = argFoo;
            entity = delete michal[entity];
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'parse';
        entity['key'] = oscard;
        report = function(argFoo, argBar) { // Original name: value
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.valuesIn;
            michal = this;
            michal = michal.rules;
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.reduce;
            michal = function(argFoo, argBar) {
                zuuluu = argFoo;
                oscard = argBar;
                var _closure4_slot0 = oscard;
                report = oscard.matchFunction;
                tangon = _closure3_slot0;
                michal = _closure3_slot1;
                tangon = report.bind(oscard)(tangon, michal);
                michal = tangon.map;
                entity = function(argFoo) {
                    _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                        michal = argFoo;
                        entity = _closure4_slot0;
                        entity = entity.deleteNodeOnBackspace;
                        zuuluu = 'function';
                        entity = typeof entity;
                        if(!(zuuluu !== entity)) { _fun00002_ip = 39; continue _fun00001 }
 27:
                        entity = _closure4_slot0;
                        tangon = entity.deleteNodeOnBackspace;
                        _fun00002_ip = 54; continue _fun00001;
 39:
                        report = _closure4_slot0;
                        entity = report.deleteNodeOnBackspace;
                        tangon = entity.bind(report)(michal);
 54:
                        entity = _closure4_slot0;
                        entity = entity.editDisabled;
                        entity = typeof entity;
                        if(!(zuuluu !== entity)) { _fun00002_ip = 83; continue _fun00001 }
 71:
                        entity = _closure4_slot0;
                        zuuluu = entity.editDisabled;
                        _fun00002_ip = 98; continue _fun00001;
 83:
                        report = _closure4_slot0;
                        entity = report.editDisabled;
                        zuuluu = entity.bind(report)(michal);
 98:
                        entity = {};
                        report = _closure4_slot0;
                        golfie = report.type;
                        entity['type'] = golfie;
                        golfie = report.style;
                        report = null;
                        golfie = report == golfie;
                        report = undefined;
                        if(golfie) { _fun00002_ip = 143; continue _fun00001 }
 129:
                        golfie = _closure4_slot0;
                        oscard = golfie.style;
                        report = oscard.bind(golfie)(michal);
 143:
                        entity['style'] = report;
                        entity['deleteNodeOnBackspace'] = tangon;
                        entity['editDisabled'] = zuuluu;
                        verify = entity;
                        option = michal;
                        michal = copyDataProperties(verify, option);
                        return entity;
                    }
                };
                michal = michal.bind(tangon)(entity);
                entity = zuuluu.concat;
                entity = entity.bind(zuuluu)(michal);
                return entity;
            };
            entity = new Array(0);
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    oscard = oscard.bind(entity)();
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'uikit-native/ChatInputParser.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['default'] = oscard;
    report = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            option = zuuluu.backgroundColor;
            oscard = zuuluu.color;
            tangon = zuuluu.borderRadius;
            michal = {'backgroundColor': 0, 'color': 0, 'borderRadius': 0};
            report = null;
            yankee = michal;
            offset = null;
            entity = silentSetPrototypeOf(yankee, offset);
            yankee = {};
            offset = zuuluu;
            verify = michal;
            michal = copyDataProperties(yankee, offset, verify);
            entity = report != option;
            zuuluu = null;
            if(!entity) { _fun00004_ip = 97; continue _fun00003 }
 60:
            entity = report != tangon;
            zuuluu = null;
            if(!entity) { _fun00004_ip = 97; continue _fun00003 }
 69:
            entity = {};
            golfie = _closure1_slot4;
            report = undefined;
            report = golfie.bind(report)(option);
            entity['backgroundColor'] = report;
            entity['cornerRadius'] = tangon;
            zuuluu = entity;
 97:
            entity = {};
            report = _closure1_slot4;
            tangon = undefined;
            tangon = report.bind(tangon)(oscard);
            entity['color'] = tangon;
            entity['backgroundStyle'] = zuuluu;
            yankee = entity;
            offset = michal;
            michal = copyDataProperties(yankee, offset);
            return entity;
        }
    };
    zuuluu['convertToNativeStyle'] = report;
    zuuluu['ChatInputParseResultDataType'] = tangon;
    zuuluu['ChatInputNodeType'] = michal;
    return entity;
})();