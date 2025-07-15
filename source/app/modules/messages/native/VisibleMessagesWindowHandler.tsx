// app/modules/messages/native/VisibleMessagesWindowHandler.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    entity = function(argFoo) { // Original name: getRowMessageId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = null;
            if(!(michal != entity)) { _fun00002_ip = 86; continue _fun00001 }
 9:
            zuuluu = 'rowType';
            zuuluu = zuuluu in entity;
            if(zuuluu) { _fun00002_ip = 63; continue _fun00001 }
 20:
            tangon = entity.type;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu.MESSAGE;
            if(!(tangon === zuuluu)) { _fun00002_ip = 86; continue _fun00001 }
 42:
            zuuluu = entity.message;
            tangon = michal == zuuluu;
            michal = undefined;
            if(tangon) { _fun00002_ip = 61; continue _fun00001 }
 56:
            michal = zuuluu.id;
 61:
            return michal;
 63:
            zuuluu = entity.rowType;
            michal = _closure1_slot1;
            michal = michal.MESSAGE;
            if(!(zuuluu !== michal)) { _fun00002_ip = 90; continue _fun00001 }
 86:
            michal = undefined;
            return michal;
 90:
            entity = entity.message;
            entity = entity.id;
            return entity;
        }
    };
    var _closure1_slot2 = entity;
    entity = global;
    verify = entity.Object;
    tangon = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(michal);
    michal = 1;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot0 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.RowType;
    var _closure1_slot1 = michal;
    michal = function() { // Original name: VisibleMessagesWindowHandler
        zuuluu = this;
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot0;
        tangon = _closure1_slot3;
        entity = undefined;
        tangon = report.bind(entity)(zuuluu, tangon);
        tangon = null;
        zuuluu['data'] = tangon;
        zuuluu['callback'] = tangon;
        tangon = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure2_slot0;
                zuuluu = argFoo;
                michal['callback'] = zuuluu;
                zuuluu = michal.data;
                michal = null;
                if(!(michal != zuuluu)) { _fun00004_ip = 47; continue _fun00003 }
 27:
                zuuluu = _closure2_slot0;
                michal = zuuluu.callback;
                entity = zuuluu.data;
                entity = michal.bind(zuuluu)(entity);
 47:
                entity = undefined;
                return entity;
            }
        };
        zuuluu['setCallback'] = tangon;
        tangon = function() {
            michal = _closure2_slot0;
            entity = null;
            michal['callback'] = entity;
            michal['data'] = entity;
            entity = undefined;
            return entity;
        };
        zuuluu['clearCallback'] = tangon;
        michal = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                offset = entity.rows;
                oscard = entity.firstVisibleMessageRowIndex;
                zuuluu = entity.lastVisibleMessageRowIndex;
                michal = _closure2_slot0;
                michal = michal.callback;
                verify = null;
                if(!(verify != michal)) { _fun00006_ip = 312; continue _fun00005 }
 43:
                michal = verify != oscard;
                report = null;
                if(!michal) { _fun00006_ip = 97; continue _fun00005 }
 52:
                option = 0;
                yankee = oscard >= option;
                tangon = undefined;
                michal = oscard;
                report = null;
                if(!yankee) { _fun00006_ip = 97; continue _fun00005 }
 71:
                romeon = _closure1_slot2;
                yankee = offset[michal];
                report = romeon.bind(tangon)(yankee);
                if(!(verify == report)) { _fun00006_ip = 97; continue _fun00005 }
 88:
                michal = michal - 1;
                report = null;
                if(michal >= option) { _fun00006_ip = 71; continue _fun00005 }
 97:
                tangon = verify != zuuluu;
                michal = null;
                if(!tangon) { _fun00006_ip = 162; continue _fun00005 }
 106:
                tangon = offset.length;
                tangon = zuuluu < tangon;
                option = undefined;
                golfie = zuuluu;
                michal = null;
                if(!tangon) { _fun00006_ip = 162; continue _fun00005 }
 128:
                romeon = _closure1_slot2;
                tangon = offset[golfie];
                michal = romeon.bind(option)(tangon);
                if(!(verify == michal)) { _fun00006_ip = 162; continue _fun00005 }
 145:
                golfie = golfie + 1;
                tangon = offset.length;
                tangon = golfie < tangon;
                michal = null;
                if(tangon) { _fun00006_ip = 128; continue _fun00005 }
 162:
                golfie = verify != oscard;
                tangon = null;
                if(!golfie) { _fun00006_ip = 267; continue _fun00005 }
 171:
                golfie = verify != zuuluu;
                tangon = null;
                if(!golfie) { _fun00006_ip = 267; continue _fun00005 }
 180:
                golfie = global;
                option = golfie.Math;
                golfie = option.floor;
                yankee = zuuluu - oscard;
                zuuluu = 2;
                zuuluu = yankee / zuuluu;
                zuuluu = golfie.bind(option)(zuuluu);
                option = oscard + zuuluu;
                zuuluu = offset.length;
                zuuluu = option < zuuluu;
                oscard = undefined;
                tangon = null;
                if(!zuuluu) { _fun00006_ip = 267; continue _fun00005 }
 233:
                yankee = _closure1_slot2;
                zuuluu = offset[option];
                tangon = yankee.bind(oscard)(zuuluu);
                if(!(verify == tangon)) { _fun00006_ip = 267; continue _fun00005 }
 250:
                option = option + 1;
                zuuluu = offset.length;
                zuuluu = option < zuuluu;
                tangon = null;
                if(zuuluu) { _fun00006_ip = 233; continue _fun00005 }
 267:
                zuuluu = _closure2_slot0;
                entity = {};
                entity['topVisibleMessage'] = report;
                entity['middleVisibleMessage'] = tangon;
                entity['bottomVisibleMessage'] = michal;
                zuuluu['data'] = entity;
                michal = zuuluu.callback;
                entity = zuuluu.data;
                entity = michal.bind(zuuluu)(entity);
 312:
                entity = undefined;
                return entity;
            }
        };
        zuuluu['handleScrollPosition'] = michal;
        return entity;
    };
    var _closure1_slot3 = michal;
    michal = tangon.bind(entity)(michal);
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/VisibleMessagesWindowHandler.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();