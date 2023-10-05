import * as React from 'react';

const ReactCodeSnippet = () => {
  return (
    <div className='font-ibm'>
      <p>
        <span className='text-[#7A7A7A]'>1</span>
        <span className='mr-6' />
        <span className='text-white'>import </span>
        <span className='text-[#7A7A7A]'>{`{ ClickVoteProvider }`} </span>
        <span className='text-white'>from </span>
        <span className='text-[#AF46FF]'>{`'../click.vote.provider'`}</span>
        <span className='text-[#7A7A7A]'>; </span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>2</span>
        <span className='mr-6' />
        <span className='text-white'>import </span>
        <span className='text-[#7A7A7A]'>{`{ ClickVoteComponent }`} </span>
        <span className='text-white'>from </span>
        <span className='text-[#AF46FF]'>{`'../click.vote.component'`}</span>
        <span className='text-[#7A7A7A]'>; </span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>3</span>
        <span className='mr-6' />
        <span className='text-white'>import </span>
        <span className='text-[#7A7A7A]'>{`{ Args }`} </span>
        <span className='text-white'>from </span>
        <span className='text-[#AF46FF]'>{`'./like.example.stories'`}</span>
        <span className='text-[#7A7A7A]'>; </span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>4</span>
        <span className='mr-6' />
        <span className='text-white'>import </span>
        <span className='text-[#7A7A7A]'>{`{ FC }`} </span>
        <span className='text-white'>from </span>
        <span className='text-[#AF46FF]'>{`'react'`}</span>
        <span className='text-[#7A7A7A]'>; </span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>5</span>
        <span className='mr-6' />
        <span className='text-white'>import </span>
        <span className='text-[#7A7A7A]'>{`{ LikeStyle }`} </span>
        <span className='text-white'>from </span>
        <span className='text-[#AF46FF]'>{`'../types/like.style'`}</span>
        <span className='text-[#7A7A7A]'>; </span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>6</span>
        <span className='mr-6' />
      </p>
      <p>
        <span className='text-[#7A7A7A]'>7</span>
        <span className='mr-6' />
        <span className='text-white'>export const </span>
        <span className='text-[#B9FFF2]'>LikeExample</span>
        <span className='text-white'>: </span>
        <span className='text-[#B9FFF2]'>FC</span>
        <span className='text-[#7A7A7A]'>{`<`}</span>
        <span className='text-[#B9FFF2]'>Args</span>
        <span className='text-[#7A7A7A]'>{`>`}</span>
        <span className='text-white'> = </span>
        <span className='text-[#7A7A7A]'>(</span>
        <span className='text-[#00F0FF]'>props</span>
        <span className='text-[#7A7A7A]'>)</span>
        <span className='text-white'>{` => `}</span>
        <span className='text-[#7A7A7A]'>{`{`}</span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>8</span>
        <span className='mr-6' />
        <span className='mr-4' />
        <span className='text-white'>const </span>
        <span className='text-[#7A7A7A]'>{`{ `}</span>
        <span className='text-[#AF46FF]'>apiUrl</span>
        <span className='text-[#7A7A7A]'>, </span>
        <span className='text-[#AF46FF]'>publicKey</span>
        <span className='text-[#7A7A7A]'>, </span>
        <span className='text-[#AF46FF]'>voteId</span>
        <span className='text-[#7A7A7A]'>, </span>
        <span className='text-[#AF46FF]'>voteTo</span>
        <span className='text-[#7A7A7A]'>, </span>
        <span className='text-[#AF46FF]'>userId</span>
        <span className='text-[#7A7A7A]'>{` }`}</span>
        <span className='text-white'> = </span>
        <span className='text-[#7A7A7A]'>props;</span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>9</span>
        <span className='mr-6' />
        <span className='mr-4' />
        <span className='text-white'>return </span>
        <span className='text-[#7A7A7A]'>(</span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>10</span>
        <span className='mr-6' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='text-white'>{`<`}</span>
        <span className='text-[#7A7A7A]'>div style</span>
        <span className='text-white'>=</span>
        <span className='text-[#7A7A7A]'>{`{{ width: `}</span>
        <span className='text-[#AF46FF]'>200</span>
        <span className='text-[#7A7A7A]'>{` }}`}</span>
        <span className='text-white'>{`>`}</span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>11</span>
        <span className='mr-6' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='text-white'>{`<`}</span>
        <span className='text-[#7A7A7A]'>ClickVoteProvider value</span>
        <span className='text-white'>=</span>
        <span className='text-[#7A7A7A]'>{`{{ apiUrl, publicKey, userId }}`}</span>
        <span className='text-white'>{`>`}</span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>12</span>
        <span className='mr-6' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='text-white'>{`<`}</span>
        <span className='text-[#7A7A7A]'>ClickVoteComponent id</span>
        <span className='text-white'>=</span>
        <span className='text-[#7A7A7A]'>{`{voteId voteTo}`}</span>
        <span className='text-white'>=</span>
        <span className='text-[#7A7A7A]'>{`{voteTo}`}</span>
        <span className='text-white'>{`>`}</span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>13</span>
        <span className='mr-6' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='text-[#7A7A7A]'>{`{(`}</span>
        <span className='text-[#00F0FF]'>props</span>
        <span className='text-[#7A7A7A]'>)</span>
        <span className='text-white'>{` => `}</span>
        <span className='text-[#7A7A7A]'>{`<`}</span>
        <span className='text-[#B9FFF2]'>LikeStyle </span>
        <span className='text-[#7A7A7A]'>{`{`}</span>
        <span className='text-white'>...</span>
        <span className='text-[#B9FFF2]'>props</span>
        <span className='text-[#7A7A7A]'>{`} />}`}</span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>14</span>
        <span className='mr-6' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='text-white'>{`</`}</span>
        <span className='text-[#7A7A7A]'>ClickVoteComponent</span>
        <span className='text-white'>{`>`}</span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>15</span>
        <span className='mr-6' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='text-white'>{`</`}</span>
        <span className='text-[#7A7A7A]'>ClickVoteProvider</span>
        <span className='text-white'>{`>`}</span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>16</span>
        <span className='mr-6' />
        <span className='mr-4' />
        <span className='mr-4' />
        <span className='text-white'>{`</`}</span>
        <span className='text-[#7A7A7A]'>div</span>
        <span className='text-white'>{`>`}</span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>17</span>
        <span className='mr-6' />
        <span className='mr-4' />
        <span className='text-[#7A7A7A]'>);</span>
      </p>
      <p>
        <span className='text-[#7A7A7A]'>18</span>
        <span className='mr-6' />
        <span className='text-[#7A7A7A]'>{`};`}</span>
      </p>
    </div>
  );
};
export default ReactCodeSnippet;
