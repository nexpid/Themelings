// app/actions/CreateInviteModalActionCreators.tsx
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
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.AnalyticEvents;
    var _closure1_slot4 = michal;
    michal = {};
    golfie = function(argFoo, argBar, argBaz) { // Original name: init
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argBaz;
            report = this;
            tangon = michal.location;
            entity = undefined;
            if(!(tangon === entity)) { _fun00002_ip = 21; continue _fun00001 }
 17:
            tangon = '';
 21:
            verify = michal.targetType;
            option = michal.targetUserId;
            golfie = michal.targetApplicationId;
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 2;
            michal = oscard[michal];
            oscard = zuuluu.bind(entity)(michal);
            zuuluu = oscard.dispatch;
            michal = {};
            offset = 'CREATE_INVITE_MODAL_INIT';
            michal['type'] = offset;
            offset = argFoo;
            michal['guildId'] = offset;
            offset = argBar;
            michal['channelId'] = offset;
            michal['targetType'] = verify;
            michal['targetUserId'] = option;
            michal['targetApplicationId'] = golfie;
            michal = zuuluu.bind(oscard)(michal);
            zuuluu = report.createInvite;
            michal = true;
            michal = zuuluu.bind(report)(tangon, michal);
            return entity;
        }
    };
    michal['init'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: openSettings
        zuuluu = _closure1_slot3;
        entity = zuuluu.getInviteSettings;
        offset = entity.bind(zuuluu)();
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        entity = 2;
        zuuluu = report[entity];
        entity = undefined;
        golfie = tangon.bind(entity)(zuuluu);
        oscard = golfie.dispatch;
        zuuluu = {};
        verify = 'CREATE_INVITE_MODAL_OPEN';
        zuuluu['type'] = verify;
        yankee = zuuluu;
        option = copyDataProperties(yankee, offset);
        verify = argFoo;
        option = 'guildId';
        zuuluu[option] = verify;
        verify = argBar;
        option = 'channelId';
        zuuluu[option] = verify;
        verify = argCor;
        option = 'onClose';
        zuuluu[option] = verify;
        zuuluu = oscard.bind(golfie)(zuuluu);
        zuuluu = 3;
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot4;
        zuuluu = michal.OPEN_MODAL;
        michal = {};
        oscard = 'Instant Invite';
        michal['type'] = oscard;
        oscard = argBaz;
        michal['source'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    michal['openSettings'] = golfie;
    golfie = function(argFoo) { // Original name: updateSettings
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CREATE_INVITE_MODAL_UPDATE_SETTINGS';
        michal['type'] = report;
        report = argFoo;
        michal['settings'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['updateSettings'] = golfie;
    golfie = function() { // Original name: resetSettings
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CREATE_INVITE_MODAL_RESET_SETTINGS';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['resetSettings'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: createInvite
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot3;
            michal = tangon.getPendingSettings;
            michal = michal.bind(tangon)();
            backup = null;
            if(!(backup != michal)) { _fun00004_ip = 285; continue _fun00003 }
 28:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 2;
            tangon = oscard[tangon];
            foxtra = undefined;
            oscard = report.bind(foxtra)(tangon);
            report = oscard.dispatch;
            tangon = {};
            golfie = 'CREATE_INVITE_MODAL_GENERATE_INVITE';
            tangon['type'] = golfie;
            tangon = report.bind(oscard)(tangon);
            oscard = michal.channelId;
            var _closure2_slot0 = oscard;
            kiloes = michal.maxAge;
            romeon = michal.maxUses;
            yankee = michal.temporary;
            verify = michal.targetType;
            option = michal.targetUserId;
            golfie = michal.targetApplicationId;
            michal = michal.flags;
            report = _closure1_slot3;
            tangon = report.getInvite;
            tangon = tangon.bind(report)();
            report = argBar;
            offset = null;
            if(!report) { _fun00004_ip = 158; continue _fun00003 }
 144:
            report = backup != tangon;
            offset = null;
            if(!report) { _fun00004_ip = 158; continue _fun00003 }
 153:
            offset = tangon.code;
 158:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            report = tangon.bind(foxtra)(zuuluu);
            tangon = report.createInvite;
            zuuluu = {};
            zuuluu['temporary'] = yankee;
            zuuluu['validate'] = offset;
            offset = global;
            backup = offset.parseInt;
            yankee = 10;
            backup = backup.bind(foxtra)(kiloes, yankee);
            zuuluu['max_age'] = backup;
            offset = offset.parseInt;
            offset = offset.bind(foxtra)(romeon, yankee);
            zuuluu['max_uses'] = offset;
            zuuluu['target_type'] = verify;
            zuuluu['target_user_id'] = option;
            zuuluu['target_application_id'] = golfie;
            zuuluu['flags'] = michal;
            michal = argFoo;
            tangon = tangon.bind(report)(oscard, zuuluu, michal);
            zuuluu = tangon.then;
            michal = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.dispatch;
                michal = {};
                report = 'CREATE_INVITE_MODAL_GENERATE_INVITE_SUCCESS';
                michal['type'] = report;
                report = _closure2_slot0;
                michal['channelId'] = report;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            entity = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 5;
                    report = option[tangon];
                    entity = undefined;
                    report = golfie.bind(entity)(report);
                    oscard = report.intl;
                    report = oscard.string;
                    tangon = option[tangon];
                    tangon = golfie.bind(entity)(tangon);
                    tangon = tangon.t;
                    tangon = tangon.WB1ip6;
                    report = report.bind(oscard)(tangon);
                    oscard = null;
                    golfie = oscard == zuuluu;
                    tangon = undefined;
                    if(golfie) { _fun00006_ip = 81; continue _fun00005 }
 76:
                    tangon = zuuluu.message;
 81:
                    if(!(oscard != tangon)) { _fun00006_ip = 90; continue _fun00005 }
 85:
                    report = zuuluu.message;
 90:
                    zuuluu = _closure1_slot1;
                    tangon = _closure1_slot2;
                    michal = 2;
                    michal = tangon[michal];
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    oscard = 'CREATE_INVITE_MODAL_GENERATE_INVITE_FAILURE';
                    michal['type'] = oscard;
                    michal['message'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            entity = zuuluu.bind(tangon)(michal, entity);
 285:
            entity = undefined;
            return entity;
        }
    };
    michal['createInvite'] = golfie;
    tangon = function() { // Original name: close
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = _closure1_slot3;
            michal = michal.onClose;
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.dispatch;
            zuuluu = {};
            oscard = 'CREATE_INVITE_MODAL_CLOSE';
            zuuluu['type'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = null;
            if(!(zuuluu != michal)) { _fun00008_ip = 65; continue _fun00007 }
 61:
            michal = michal.bind(entity)();
 65:
            return entity;
        }
    };
    michal['close'] = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/CreateInviteModalActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();