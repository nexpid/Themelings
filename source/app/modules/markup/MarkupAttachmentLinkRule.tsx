// app/modules/markup/MarkupAttachmentLinkRule.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = global;
    golfie = entity.Object;
    tangon = golfie.defineProperty;
    michal = {};
    backup = true;
    michal['value'] = backup;
    entity = '__esModule';
    entity = tangon.bind(golfie)(zuuluu, entity, michal);
    entity = /^https:\\/\\/(?:(?:media|images)\.discordapp\.net|(?:cdn\.discordapp\.com))\\/(?:attachments|ephemeral-attachments)\\/\d+\\/\d+\\/([A-Za-z0-9._-]*[A-Za-z0-9_-])(?:[?][a-zA-Z0-9?&=_-]*)?/;
    var _closure1_slot0 = entity;
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    offset = report.bind(entity)(michal);
    golfie = offset.createExperiment;
    michal = {'kind': 'user', 'id': '2023-11_attachment_link_markup', 'label': 'Attachment Link Config User Experiment'};
    tangon = {};
    romeon = false;
    tangon['enabled'] = romeon;
    michal['defaultConfig'] = tangon;
    tangon = {'id': 1, 'label': 'Shows links to attachments as regular links'};
    verify = 1;
    yankee = {};
    yankee['enabled'] = romeon;
    tangon['config'] = yankee;
    yankee = new Array(2);
    yankee[0] = tangon;
    romeon = {'id': 2, 'label': 'Shows links to attachments as "mentions" of the filename'};
    tangon = 2;
    foxtra = {};
    foxtra['enabled'] = backup;
    romeon['config'] = foxtra;
    yankee[1] = romeon;
    michal['treatments'] = yankee;
    michal = golfie.bind(offset)(michal);
    var _closure1_slot1 = michal;
    michal = {};
    golfie = {};
    offset = oscard[verify];
    verify = argBaz;
    verify = verify.bind(entity)(offset);
    verify = verify.defaultRules;
    verify = verify.url;
    offset = verify.order;
    verify = 0.5;
    verify = offset - verify;
    golfie['order'] = verify;
    verify = ['h'];
    golfie['requiredFirstCharacters'] = verify;
    verify = function(argFoo) { // Original name: match
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            michal = tangon.exec;
            entity = argFoo;
            entity = michal.bind(tangon)(entity);
            michal = null;
            if(!(michal !== entity)) { _fun00002_ip = 64; continue _fun00001 }
 27:
            report = _closure1_slot1;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            oscard = 'markup';
            zuuluu['location'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = zuuluu.enabled;
            if(zuuluu) { _fun00002_ip = 64; continue _fun00001 }
 62:
            return michal;
 64:
            return entity;
        }
    };
    golfie['match'] = verify;
    option = function(argFoo) { // Original name: parse
        michal = argFoo;
        entity = 0;
        zuuluu = michal[entity];
        entity = 1;
        michal = michal[entity];
        entity = {};
        tangon = 'attachmentLink';
        entity['type'] = tangon;
        report = {};
        tangon = 'text';
        report['type'] = tangon;
        report['content'] = michal;
        tangon = new Array(1);
        tangon[0] = report;
        entity['content'] = tangon;
        entity['attachmentUrl'] = zuuluu;
        entity['attachmentName'] = michal;
        return entity;
    };
    golfie['parse'] = option;
    michal['attachmentLink'] = golfie;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/markup/MarkupAttachmentLinkRule.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();