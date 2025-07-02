// app/actions/ConnectedAccountsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    golfie = function(argFoo, argBar) { // Original name: callback
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            yankee = argFoo;
            offset = arguments[2];
            option = undefined;
            if(!(offset === option)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            offset = false;
 14:
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 5;
            entity = verify[entity];
            entity = oscard.bind(option)(entity);
            zuuluu = entity.HTTP;
            michal = zuuluu.post;
            entity = {};
            report = _closure1_slot7;
            tangon = report.CONNECTIONS_CALLBACK;
            tangon = tangon.bind(report)(yankee);
            entity['url'] = tangon;
            tangon = {};
            romeon = argBar;
            foxtra = tangon;
            report = copyDataProperties(foxtra, romeon);
            report = 'insecure';
            tangon[report] = offset;
            offset = _closure1_slot8;
            report = offset.has;
            offset = report.bind(offset)(yankee);
            report = 'friend_sync';
            tangon[report] = offset;
            report = 6;
            report = verify[report];
            report = oscard.bind(option)(report);
            option = report.ExperimentConnectionFlowRefactor;
            oscard = option.getCurrentConfig;
            report = {};
            verify = 'ConnectedAccountsActionCreators.callback';
            report['location'] = verify;
            report = oscard.bind(option)(report);
            report = report.enabled;
            if(report) { _fun00002_ip = 166; continue _fun00001 }
 162:
            report = {};
            _fun00002_ip = 190; continue _fun00001;
 166:
            oscard = {};
            option = _closure1_slot4;
            golfie = option.getSessionId;
            golfie = golfie.bind(option)();
            oscard['session_id'] = golfie;
            report = oscard;
 190:
            foxtra = tangon;
            romeon = report;
            report = copyDataProperties(foxtra, romeon);
            entity['body'] = tangon;
            tangon = true;
            entity['oldFormErrors'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot11 = golfie;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    verify = michal.AbortCodes;
    var _closure1_slot6 = verify;
    verify = michal.Endpoints;
    var _closure1_slot7 = verify;
    verify = michal.FRIEND_SYNC_PLATFORM_TYPES;
    var _closure1_slot8 = verify;
    michal = michal.AnalyticEvents;
    var _closure1_slot9 = michal;
    michal = 4;
    michal = oscard[michal];
    verify = option.bind(entity)(michal);
    michal = verify.prototype;
    option = Object.create(michal, {constructor: {value: verify}});
    foxtra = 'ConnectedAccounts';
    backup = option;
    michal = new backup[verify](foxtra, romeon);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot10 = michal;
    michal = {};
    option = function() { // Original name: fetch
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 5;
        zuuluu = zuuluu[michal];
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        tangon = michal.HTTP;
        zuuluu = tangon.get;
        michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
        report = _closure1_slot7;
        report = report.CONNECTIONS;
        michal['url'] = report;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.then;
        michal = function(argFoo) {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {'type': 'USER_CONNECTIONS_UPDATE', 'local': true};
            tangon = argFoo;
            tangon = tangon.body;
            entity['accounts'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.dispatch;
            entity = {'type': 'USER_CONNECTIONS_UPDATE', 'local': true};
            tangon = new Array(0);
            entity['accounts'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal['fetch'] = option;
    option = function(argFoo) { // Original name: authorize
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = arguments[1];
            michal = argFoo;
            var _closure2_slot0 = michal;
            michal = undefined;
            if(!(zuuluu === michal)) { _fun00004_ip = 20; continue _fun00003 }
 18:
            zuuluu = {};
 20:
            tangon = zuuluu.location;
            var _closure2_slot1 = tangon;
            tangon = zuuluu.twoWayLinkType;
            var _closure2_slot2 = tangon;
            tangon = zuuluu.userCode;
            var _closure2_slot3 = tangon;
            tangon = zuuluu.twoWayLink;
            var _closure2_slot4 = tangon;
            tangon = zuuluu.successRedirect;
            var _closure2_slot5 = tangon;
            zuuluu = zuuluu.handle;
            var _closure2_slot6 = zuuluu;
            zuuluu = _closure1_slot3;
            entity = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(michal) { _fun00006_ip = 640; continue _fun00005 }
 10:
                        tangon = _closure1_slot1;
                        report = _closure1_slot2;
                        michal = 8;
                        michal = report[michal];
                        option = undefined;
                        verify = tangon.bind(option)(michal);
                        golfie = verify.track;
                        michal = _closure1_slot9;
                        report = michal.CONNECTED_ACCOUNT_INITIATED;
                        tangon = {};
                        oscard = _closure2_slot0;
                        tangon['platform_type'] = oscard;
                        offset = _closure2_slot1;
                        tangon['location'] = offset;
                        tangon = golfie.bind(verify)(report, tangon);
                        report = _closure1_slot7;
                        tangon = report.CONNECTIONS_AUTHORIZE;
                        report = tangon.bind(report)(oscard);
                        golfie = global;
                        tangon = golfie.URLSearchParams;
                        oscard = tangon.prototype;
                        oscard = Object.create(oscard, {constructor: {value: tangon}});
                        kiloes = oscard;
                        tangon = new kiloes[tangon](backup);
                        oscard = tangon instanceof Object ? tangon : oscard;
                        verify = _closure2_slot3;
                        tangon = null;
                        if(!(tangon != verify)) { _fun00006_ip = 153; continue _fun00005 }
 131:
                        yankee = oscard.append;
                        offset = _closure2_slot3;
                        verify = 'two_way_user_code';
                        verify = yankee.bind(oscard)(verify, offset);
 153:
                        verify = _closure2_slot5;
                        if(!(tangon != verify)) { _fun00006_ip = 183; continue _fun00005 }
 161:
                        yankee = oscard.append;
                        offset = _closure2_slot5;
                        verify = 'success_redirect';
                        verify = yankee.bind(oscard)(verify, offset);
 183:
                        verify = _closure2_slot2;
                        if(!(tangon == verify)) { _fun00006_ip = 234; continue _fun00005 }
 191:
                        verify = _closure2_slot4;
                        if(!(tangon != verify)) { _fun00006_ip = 278; continue _fun00005 }
 199:
                        offset = oscard.append;
                        verify = golfie.String;
                        golfie = _closure2_slot4;
                        verify = verify.bind(option)(golfie);
                        golfie = 'two_way_link';
                        golfie = offset.bind(oscard)(golfie, verify);
                        _fun00006_ip = 278; continue _fun00005;
 234:
                        offset = oscard.append;
                        verify = _closure2_slot2;
                        golfie = 'two_way_link_type';
                        golfie = offset.bind(oscard)(golfie, verify);
                        offset = oscard.append;
                        verify = 'two_way_link';
                        golfie = 'true';
                        golfie = offset.bind(oscard)(verify, golfie);
 278:
                        golfie = _closure2_slot6;
                        if(!(tangon != golfie)) { _fun00006_ip = 306; continue _fun00005 }
 286:
                        verify = oscard.append;
                        golfie = _closure2_slot6;
                        michal = 'handle';
                        michal = verify.bind(oscard)(michal, golfie);
 306:
                        golfie = _closure1_slot0;
                        michal = _closure1_slot2;
                        verify = 6;
                        michal = michal[verify];
                        michal = golfie.bind(option)(michal);
                        yankee = michal.ExperimentConnectionFlowRefactor;
                        offset = yankee.getCurrentConfig;
                        golfie = {};
                        michal = 'ConnectedAcountsActionCreators.authorize';
                        golfie['location'] = michal;
                        michal = {};
                        romeon = true;
                        michal['autoTrackExposure'] = romeon;
                        michal = offset.bind(yankee)(golfie, michal);
                        michal = michal.enabled;
                        if(!michal) { _fun00006_ip = 407; continue _fun00005 }
 373:
                        golfie = _closure1_slot4;
                        michal = golfie.getSessionId;
                        offset = michal.bind(golfie)();
                        if(!(tangon != offset)) { _fun00006_ip = 407; continue _fun00005 }
 391:
                        golfie = oscard.append;
                        michal = 'session_id';
                        michal = golfie.bind(oscard)(michal, offset);
 407:
                        michal = '?';
                        report = report + michal;
                        michal = oscard.toString;
                        michal = michal.bind(oscard)();
                        golfie = report + michal;
                        report = _closure1_slot0;
                        oscard = _closure1_slot2;
                        michal = 5;
                        michal = oscard[michal];
                        michal = report.bind(option)(michal);
                        oscard = michal.HTTP;
                        report = oscard.get;
                        michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                        michal['url'] = golfie;
                        michal = report.bind(oscard)(michal);
                        SaveGenerator(address=487);
 485:
                        return michal;
 487:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(report) { _fun00006_ip = 637; continue _fun00005 }
 496:
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        report = 9;
                        report = golfie[report];
                        golfie = oscard.bind(option)(report);
                        oscard = golfie.getCallbackParamsFromURL;
                        report = michal.body;
                        offset = report.url;
                        yankee = tangon != offset;
                        report = '';
                        if(!yankee) { _fun00006_ip = 546; continue _fun00005 }
 543:
                        report = offset;
 546:
                        report = oscard.bind(golfie)(report);
                        report = report.state;
                        tangon = tangon == report;
                        if(tangon) { _fun00006_ip = 614; continue _fun00005 }
 563:
                        golfie = _closure1_slot0;
                        oscard = _closure1_slot2;
                        oscard = oscard[verify];
                        oscard = golfie.bind(option)(oscard);
                        option = oscard.ExperimentConnectionFlowRefactor;
                        golfie = option.getCurrentConfig;
                        oscard = {};
                        verify = 'ConnectedAccountsActionCreators.authorize';
                        oscard['location'] = verify;
                        oscard = golfie.bind(option)(oscard);
                        tangon = oscard.enabled;
 614:
                        if(tangon) { _fun00006_ip = 634; continue _fun00005 }
 617:
                        tangon = _closure1_slot5;
                        zuuluu = tangon.addPendingAuthorizedState;
                        zuuluu = zuuluu.bind(tangon)(report);
 634:
                        return michal;
 637:
                        return michal;
 640:
                        return entity;
                    }
                };
                return entity;
            };
            entity = zuuluu.bind(michal)(entity);
            entity = entity.bind(michal)();
            return entity;
        }
    };
    michal['authorize'] = option;
    michal['callback'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: connect
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            option = argFoo;
            golfie = argBaz;
            yankee = argGra;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 10;
            entity = zuuluu[entity];
            offset = undefined;
            zuuluu = michal.bind(offset)(entity);
            michal = zuuluu.put;
            entity = {};
            verify = _closure1_slot7;
            report = verify.CONNECTION;
            tangon = argBar;
            tangon = report.bind(verify)(option, tangon);
            entity['url'] = tangon;
            tangon = {};
            tangon['name'] = golfie;
            verify = null;
            romeon = verify == yankee;
            report = undefined;
            if(romeon) { _fun00008_ip = 88; continue _fun00007 }
 82:
            report = yankee.friend_sync;
 88:
            if(!(verify == report)) { _fun00008_ip = 106; continue _fun00007 }
 92:
            yankee = _closure1_slot8;
            verify = yankee.has;
            report = verify.bind(yankee)(option);
 106:
            tangon['friend_sync'] = report;
            entity['body'] = tangon;
            tangon = {};
            report = argCor;
            tangon['location'] = report;
            entity['context'] = tangon;
            tangon = true;
            entity['oldFormErrors'] = tangon;
            tangon = {};
            verify = _closure1_slot0;
            yankee = _closure1_slot2;
            report = 11;
            report = yankee[report];
            report = verify.bind(offset)(report);
            report = report.NetworkActionNames;
            report = report.USER_CONNECTIONS_UPDATE;
            tangon['event'] = report;
            report = {};
            report['name'] = golfie;
            golfie = _closure1_slot8;
            oscard = golfie.has;
            oscard = oscard.bind(golfie)(option);
            report['friend_sync'] = oscard;
            tangon['properties'] = report;
            entity['trackedActionData'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    michal['connect'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: disconnect
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.del;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golfie = _closure1_slot7;
        oscard = golfie.CONNECTION;
        report = argFoo;
        tangon = argBar;
        tangon = oscard.bind(golfie)(report, tangon);
        entity['url'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['disconnect'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: refresh
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golfie = _closure1_slot7;
        oscard = golfie.CONNECTION_REFRESH;
        report = argFoo;
        tangon = argBar;
        tangon = oscard.bind(golfie)(report, tangon);
        entity['url'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['refresh'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: setVisibility
        report = this;
        tangon = report.update;
        zuuluu = {};
        michal = 1;
        entity = argBaz;
        entity = michal === entity;
        zuuluu['visibility'] = entity;
        michal = argFoo;
        entity = argBar;
        entity = tangon.bind(report)(michal, entity, zuuluu);
        return entity;
    };
    michal['setVisibility'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: setMetadataVisibility
        report = this;
        tangon = report.update;
        zuuluu = {};
        michal = 1;
        entity = argBaz;
        entity = michal === entity;
        zuuluu['metadata_visibility'] = entity;
        michal = argFoo;
        entity = argBar;
        entity = tangon.bind(report)(michal, entity, zuuluu);
        return entity;
    };
    michal['setMetadataVisibility'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: setFriendSync
        report = this;
        tangon = report.update;
        zuuluu = {};
        entity = argBaz;
        zuuluu['friend_sync'] = entity;
        michal = argFoo;
        entity = argBar;
        entity = tangon.bind(report)(michal, entity, zuuluu);
        return entity;
    };
    michal['setFriendSync'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: setShowActivity
        report = this;
        tangon = report.update;
        zuuluu = {};
        entity = argBaz;
        zuuluu['show_activity'] = entity;
        michal = argFoo;
        entity = argBar;
        entity = tangon.bind(report)(michal, entity, zuuluu);
        return entity;
    };
    michal['setShowActivity'] = golfie;
    golfie = function(argFoo, argBar, argBaz) { // Original name: update
        oscard = argBaz;
        michal = _closure1_slot1;
        verify = _closure1_slot2;
        entity = 10;
        entity = verify[entity];
        option = undefined;
        zuuluu = michal.bind(option)(entity);
        michal = zuuluu.patch;
        entity = {};
        yankee = _closure1_slot7;
        offset = yankee.CONNECTION;
        golfie = argFoo;
        tangon = argBar;
        tangon = offset.bind(yankee)(golfie, tangon);
        entity['url'] = tangon;
        entity['body'] = oscard;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = {};
        golfie = _closure1_slot0;
        report = 11;
        report = verify[report];
        report = golfie.bind(option)(report);
        report = report.NetworkActionNames;
        report = report.USER_CONNECTIONS_UPDATE;
        tangon['event'] = report;
        report = {};
        foxtra = report;
        romeon = oscard;
        oscard = copyDataProperties(foxtra, romeon);
        tangon['properties'] = report;
        entity['trackedActionData'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['update'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: joinServer
        option = argFoo;
        var _closure2_slot0 = option;
        entity = argBar;
        var _closure2_slot1 = entity;
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        entity = 7;
        zuuluu = report[entity];
        entity = undefined;
        golfie = tangon.bind(entity)(zuuluu);
        tangon = golfie.dispatch;
        zuuluu = {'type': 'USER_CONNECTIONS_INTEGRATION_JOINING', 'integrationId': null, 'joining': true};
        zuuluu['integrationId'] = option;
        zuuluu = tangon.bind(golfie)(zuuluu);
        tangon = _closure1_slot0;
        zuuluu = 5;
        zuuluu = report[zuuluu];
        zuuluu = tangon.bind(entity)(zuuluu);
        report = zuuluu.HTTP;
        tangon = report.post;
        zuuluu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        golfie = _closure1_slot7;
        oscard = golfie.INTEGRATION_JOIN;
        oscard = oscard.bind(golfie)(option);
        zuuluu['url'] = oscard;
        michal = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                golfie = argFoo;
                tangon = _closure1_slot1;
                entity = _closure1_slot2;
                report = 7;
                michal = entity[report];
                entity = undefined;
                option = tangon.bind(entity)(michal);
                oscard = option.dispatch;
                tangon = {'type': 'USER_CONNECTIONS_INTEGRATION_JOINING', 'integrationId': null, 'joining': false};
                verify = _closure2_slot0;
                tangon['integrationId'] = verify;
                tangon = oscard.bind(option)(tangon);
                tangon = golfie.ok;
                if(tangon) { _fun00010_ip = 165; continue _fun00009 }
 74:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[report];
                report = tangon.bind(entity)(zuuluu);
                tangon = report.dispatch;
                zuuluu = {};
                oscard = 'USER_CONNECTIONS_INTEGRATION_JOINING_ERROR';
                zuuluu['type'] = oscard;
                oscard = _closure2_slot0;
                zuuluu['integrationId'] = oscard;
                option = golfie.hasErr;
                oscard = undefined;
                if(option) { _fun00010_ip = 138; continue _fun00009 }
 128:
                golfie = golfie.body;
                oscard = golfie.message;
 138:
                zuuluu['error'] = oscard;
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = _closure2_slot1;
                zuuluu = null;
                if(!(zuuluu != tangon)) { _fun00010_ip = 165; continue _fun00009 }
 157:
                michal = _closure2_slot1;
                michal = michal.bind(entity)();
 165:
                return entity;
            }
        };
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    michal['joinServer'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: refreshAccessToken
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 293; continue _fun00011 }
 10: // try_start_0
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = oscard[zuuluu];
                    golfie = undefined;
                    zuuluu = tangon.bind(golfie)(zuuluu);
                    oscard = zuuluu.HTTP;
                    tangon = oscard.get;
                    zuuluu = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
                    romeon = _closure1_slot7;
                    yankee = romeon.CONNECTION_ACCESS_TOKEN;
                    offset = _closure2_slot0;
                    verify = _closure2_slot1;
                    verify = yankee.bind(romeon)(offset, verify);
                    zuuluu['url'] = verify;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    SaveGenerator(address=101);
 99:
                    return zuuluu;
 101:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00012_ip = 185; continue _fun00011 }
 107:
                    tangon = zuuluu.body;
                    tangon = tangon.access_token;
                    oscard = _closure1_slot1;
                    verify = _closure1_slot2;
                    report = 7;
                    report = verify[report];
                    golfie = oscard.bind(golfie)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    verify = 'USER_CONNECTION_UPDATE';
                    report['type'] = verify;
                    verify = _closure2_slot0;
                    report['platformType'] = verify;
                    option = _closure2_slot1;
                    report['id'] = option;
                    report['accessToken'] = tangon;
                    report = oscard.bind(golfie)(report);
 182: // try_end0
                    return tangon;
 185:
                    return zuuluu;
 188: // catch_target0
                    CatchBlockStart(arg_register=2);
                    michal = zuuluu;
                    zuuluu = zuuluu.body;
                    report = zuuluu.code;
                    tangon = _closure1_slot6;
                    tangon = tangon.CONNECTION_REVOKED;
                    if(!(report === tangon)) { _fun00012_ip = 291; continue _fun00011 }
 220:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    zuuluu = 7;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'USER_CONNECTION_UPDATE';
                    zuuluu['type'] = oscard;
                    golfie = _closure2_slot0;
                    zuuluu['platformType'] = golfie;
                    oscard = _closure2_slot1;
                    zuuluu['id'] = oscard;
                    oscard = true;
                    zuuluu['revoked'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 291:
                    throw michal;
 293:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['refreshAccessToken'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: linkDispatchAuthCallback
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        oscard = _closure1_slot7;
        report = oscard.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK;
        tangon = argFoo;
        tangon = report.bind(oscard)(tangon);
        entity['url'] = tangon;
        tangon = {};
        golfie = argBar;
        option = tangon;
        report = copyDataProperties(option, golfie);
        entity['body'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['linkDispatchAuthCallback'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: completeTwoWayLink
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = argCor;
        var _closure2_slot3 = michal;
        michal = argGra;
        var _closure2_slot4 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 209; continue _fun00013 }
 10:
                    michal = _closure2_slot1;
                    tangon = null;
                    if(!(tangon == michal)) { _fun00014_ip = 48; continue _fun00013 }
 23:
                    report = _closure1_slot10;
                    zuuluu = report.error;
                    michal = 'Two-way link: missing authorize location';
                    michal = zuuluu.bind(report)(michal);
                    _fun00014_ip = 140; continue _fun00013;
 48:
                    golfie = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 9;
                    zuuluu = report[zuuluu];
                    report = undefined;
                    option = golfie.bind(report)(zuuluu);
                    golfie = option.getCallbackParamsFromURL;
                    zuuluu = _closure2_slot1;
                    zuuluu = golfie.bind(option)(zuuluu);
                    golfie = zuuluu.code;
                    offset = zuuluu.error;
                    zuuluu = zuuluu.errorDescription;
                    if(!(tangon != offset)) { _fun00014_ip = 145; continue _fun00013 }
 108:
                    verify = _closure1_slot10;
                    option = verify.error;
                    tangon = {};
                    tangon['error'] = offset;
                    tangon['errorDescription'] = zuuluu;
                    zuuluu = 'Two-way link: missing authorize code';
                    zuuluu = option.bind(verify)(zuuluu, tangon);
 140:
                    zuuluu = undefined;
                    return zuuluu;
 145:
                    tangon = _closure1_slot11;
                    zuuluu = _closure2_slot0;
                    michal = {};
                    option = _closure2_slot2;
                    michal['code'] = option;
                    option = _closure2_slot3;
                    michal['state'] = option;
                    michal['two_way_link_code'] = golfie;
                    oscard = _closure2_slot4;
                    michal['token_redirect_uri'] = oscard;
                    michal = tangon.bind(report)(zuuluu, michal);
                    SaveGenerator(address=197);
 195:
                    return michal;
 197:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 206; continue _fun00013 }
 203:
                    return michal;
 206:
                    return michal;
 209:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['completeTwoWayLink'] = golfie;
    golfie = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: sessionHandoff
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        oscard = _closure1_slot7;
        report = oscard.CONNECTIONS_SESSION_HANDOFF;
        tangon = argFoo;
        tangon = report.bind(oscard)(tangon);
        entity['url'] = tangon;
        tangon = {};
        report = argBar;
        tangon['state'] = report;
        report = argBaz;
        tangon['code'] = report;
        report = argCor;
        tangon['openid_params'] = report;
        report = argGra;
        tangon['iss'] = report;
        entity['body'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['sessionHandoff'] = golfie;
    tangon = function(argFoo, argBar) { // Original name: getHandoffStatus
        report = argBar;
        michal = global;
        entity = michal.URLSearchParams;
        zuuluu = entity.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: entity}});
        yankee = zuuluu;
        entity = new yankee[entity](offset);
        tangon = entity instanceof Object ? entity : zuuluu;
        zuuluu = tangon.append;
        entity = 'state';
        entity = zuuluu.bind(tangon)(entity, report);
        golfie = _closure1_slot7;
        oscard = golfie.CONNECTIONS_SESSION_HANDOFF;
        zuuluu = argFoo;
        golfie = oscard.bind(golfie)(zuuluu);
        zuuluu = tangon.toString;
        oscard = zuuluu.bind(tangon)();
        michal = michal.HermesInternal;
        tangon = michal.concat;
        zuuluu = '';
        michal = '?';
        tangon = tangon.bind(zuuluu)(golfie, michal, oscard);
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.get;
        entity = {};
        entity['url'] = tangon;
        tangon = {};
        tangon['state'] = report;
        entity['body'] = tangon;
        tangon = true;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['getHandoffStatus'] = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'actions/ConnectedAccountsActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();