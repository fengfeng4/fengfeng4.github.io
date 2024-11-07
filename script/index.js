// function openCozeChat() {
//     try {
//         // 创建新的聊天实例
//         const chatClient = new CozeWebSDK.WebChatClient({
//             config: {
//                 bot_id: '7428791282442436635',
//                 pat: 'pat_0chbDW41AzTN9m5AkmsItc4RPwBsRihCAOY2zI994jRB5ExSmMXLkqI3MBwLIcg4'
//             },
//             componentProps: {
//                 title: '麒麟舞学习助手',
//                 open: true,
//                 position: 'right', // 设置窗口位置
//                 width: '400px',    // 设置窗口宽度
//                 height: '600px'    // 设置窗口高度
//             }
//         });
        
//         // 确保聊天窗口打开
//         chatClient.open();
        
//     } catch (error) {
//         console.error('打开聊天窗口失败:', error);
//         alert('聊天助手加载失败，请稍后重试');
//     }
// }

// // 添加跳转函数
// function open3DModelDemo() {
//     // 替换为您新部署的Gradio应用URL
//     const gradioAppUrl = "https://huggingface.co/spaces/[您的用户名]/[Space名称]";
//     window.open(gradioAppUrl, '_blank');
// }

// async function predict() {
//     const inputText = document.getElementById("userInput").value;
//     if (!inputText.trim()) {
//         alert("请输入内容");
//         return;
//     }

//     try {
//         const response = await fetch("http://localhost:8000/predict/", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ text: inputText }),
//         });

//         if (!response.ok) {
//             throw new Error('网络响应不正常');
//         }

//         const result = await response.json();
//         if (result.link) {
//             window.location.href = result.link;
//         } else {
//             alert("未找到相关内容");
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         alert("处理请求时出错，请稍后重试");
//     }
// }

var divNum = 0;
function showDiv(index)
{
    var div1 = document.getElementById(divNum);
    var div2 = document.getElementById(index);  

    div1.style.display = "none";
    div1.style.transition = "none";
    
    div2.style.opacity = "0";
    div2.style.display = "block";
    div2.style.transition = "1.3s ease, height 1.3s ease";
    setTimeout(() => {
        div2.style.opacity = "1";
    }, 0);
    
    divNum = index;
}
